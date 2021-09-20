import json
import os
import runpy
import sys
from collections import defaultdict


from lib import util
from libqtile.log_utils import logger


default_theme = {
    'background': "#171717",
    'foreground': "#F6F3E8",
    'black': "#282a2e",
    'red': "#a54242",
    'green': "#86b187",
    'yellow': "#de935f",
    'blue': "#8AC6F2",
    'purple': "#85678f",
    'cyan': "#5e8d87",
    'gray': "#707880",
    'light-red': "#cc6666",
    'light-green': "#b5bd68",
    'light-yellow': "#f0c674",
    'light-blue': "#81a2be",
    'light-purple': "#b294bb",
    'light-cyan': "#8abeb7",
    'light-gray': "#373b41",
    'white': "#c5c8c6",
}


def get_prop_name(string):
    '''
    Try to extract name of theme property from `string` or None.

    e.g. "{{foobar}" => "foobar"
    '''

    if not isinstance(string, str):
        return

    if string.startswith("{{") and string.endswith("}}"):
        return string[2:-2]


class ThemeProperty:
    def __init__(self, value):
        # current theme value
        self.value = value
        # widget -> list of attr names
        self.subs = defaultdict(list)

    def setValue(self, value):
        for widget, attr_names in self.subs.items():
            for attr_name in attr_names:
                setattr(widget, attr_name, value)
        return set(self.subs.keys())

class Theme:
    def __init__(self, data):
        self.props = {k: ThemeProperty(v) for k, v in data.items()}

    def __getitem__(self, key):
        return self.props[key].value

    def create_sub_data(self, widget_kwargs):
        '''Transforms `widget_kwargs` values from property name patterns to the
        corresponding property values. Returns dictionary of widget attributes
        which named a theme property.'''

        subs = {}  # theme prop -> widget attr
        for attr_name, value in widget_kwargs.items():
            prop_name = get_prop_name(value)
            if prop_name:
                subs[prop_name] = attr_name
                # overwrite kwarg value with value of named prop
                widget_kwargs[attr_name] = self.props[prop_name].value
        return subs

    def r(self, widget_class, *args, **kwargs):
        sub_data = self.create_sub_data(kwargs)
        widget = widget_class(*args, **kwargs)
        for prop_name, attr_name in sub_data.items():
            prop = self.props[prop_name]
            prop.subs[widget].append(attr_name)
        return widget

    def set(self, prop_name, value):
        '''Set the value of a theme property and all subscribed widget attributes to
        `value`. Return a set of widgets which need to be redrawn.'''
        prop = self.props[prop_name]
        return prop.setValue(value)

    def update(self, data):
        widgets = set()
        for prop_name, value in data.items():
            widgets |= self.set(prop_name, value)
        for widget in widgets:
            widget.draw()


class FileTheme(Theme):
    def __init__(self, filename):
        data = self.load(filename)
        super(FileTheme, self).__init__(data)

    def loadFile(self, filename):
        raise NotImplemented("FileTheme must be subclassed.")

    def load(self, filename = None):
        self.filename = filename or self.filename
        path = os.path.expanduser(self.filename)
        if os.path.exists(path):
            try:
                return self.loadFile(path)
            except Exception as e:
                logger.error("Couldn't load {}".format(path))
                logger.error(e)
        else:
            logger.error(f"Theme does not exist: {path}")

    def update(self, filename=None):
        data = self.load(filename)
        super(FileTheme, self).update(data)


class PythonTheme(FileTheme):
    def loadFile(self, filename):
        return runpy.run_path(filename)


class JsonTheme(FileTheme):
    def loadFile(self, filename):
        with open(filename) as fobj:
            return json.load(fobj)


class WpgtkTheme(JsonTheme):
    def loadFile(self, filename):
        data = super(WpgtkTheme, self).loadFile(filename)
        colors = data["colors"]
        colors.update(data["special"])
        return colors


theme = WpgtkTheme("~/.config/wpg/templates/colors.json")


def regenTheme(_):
    try:
        util.call('wpg-regen')
        theme.update()
    except Exception as e:
        logger.error(e)
