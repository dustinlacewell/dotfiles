import os
import runpy
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
    'light_red': "#cc6666",
    'light_green': "#b5bd68",
    'light_yellow': "#f0c674",
    'light_blue': "#81a2be",
    'light_purple': "#b294bb",
    'light_cyan': "#8abeb7",
    'light_gray': "#373b41",
    'white': "#c5c8c6",
}


def get_prop_name(string):
    '''
    Try to extract name of theme property from `string`.
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
        prop.value = value
        for widget, attr_names in prop.subs.items():
            for attr_name in attr_names:
                logger.warning("Setting {} on {}".format(attr_name, widget.__class__))
                setattr(widget, attr_name, value)
        return set(prop.subs.keys())

    def update(self, theme):
        widgets = set()
        for prop_name, value in theme.items():
            widgets |= self.set(prop_name, value)
        logger.warning("{} WIDGETS TO DRAW".format(len(widgets)))
        for widget in widgets:
            widget.draw()


def get_theme(filename):
    path = os.path.expanduser(filename)
    if os.path.exists(path):
        try:
            return runpy.run_path(path)
        except Exception as e:
            logger.error("Couldn't load {}".format(path))
            logger.error(e)
            return default_theme


class PywalTheme(Theme):

    def reload(self, *args):
        data = get_theme("~/.config/wpg/formats/colors.py")
        logger.error("WTFFF")
        self.update(data)

    def regen(self, _):
        try:
            util.call('wal-regen')
        except Exception as e:
            logger.error(e)
        finally:
            self.reload()


theme = PywalTheme(get_theme("~/.config/wpg/formats/colors.py"))
