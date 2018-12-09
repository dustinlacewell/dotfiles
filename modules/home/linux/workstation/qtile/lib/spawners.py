from libqtile.config import Key
from libqtile.command import lazy

from lib import consts


def make_spawners(base_mods, *entries):
    keys = []
    for entry in entries:
        key, command = entry[-2:]
        modifiers = base_mods + list(entry[:-2] if len(entry) > 2 else [])
        keys.append(Key(modifiers, key, lazy.spawn(command)))
    return keys


keys = make_spawners(
    [consts.MODKEY],  # base modifiers for all entries

    ('F12', "rofi -show run"),
    ("quoteleft", "pkill -fn ffmpeg"),
    ("Return", 'urxvt -e ranger'),
)
