import os
import runpy

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

class ThemeProperty:
    def __init__(self, theme, key):
        self.theme = theme
        self.key = key

    def __str__(self):
        return self.theme.getValue(self.key)

class Theme:
    def __init__(self, data):
        self.data = data

    def __getitem__(self, key):
        return ThemeProperty(self, key)

    def getValue(self, key):
        return self.data.get(key, "#000000")

    def setValue(self, key, value):
        self.data[key] = value


class PythonTheme(Theme):
    def __init__(self, filename):
        print(f"Loading theme: {filename}")
        self.filename = filename
        self.load(filename)

    def load(self, filename=None):
        if filename:
            self.data = get_python_theme(filename)
        else:
            self.data = get_python_theme(self.filename)


def get_python_theme(filename):
    path = os.path.expanduser(filename)
    if os.path.exists(path):
        try:
            return runpy.run_path(path)
        except Exception as e:
            logger.error("Couldn't load {}".format(path))
            logger.error(e)
            return default_theme

theme = PythonTheme("~/.config/wpg/templates/colors.py")

def regenTheme():
    try:
        util.call('wal-regen')
        theme.load()
    except Exception as e:
        logger.error(e)
