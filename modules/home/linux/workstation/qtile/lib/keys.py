from libqtile.config import Key
from libqtile.command import lazy

from lib import util, consts
from lib.theme import theme
from lib.groups import keys as group_keys
from lib.spawners import keys as spawner_keys


def xf86_keys(): return [
    Key([], 'XF86AudioMute', lazy.spawn('mute')),
    Key([], 'XF86AudioRaiseVolume',
        lazy.spawn('amixer -c 0 -q set Master 2dB+')),
    Key([], 'XF86AudioLowerVolume',
        lazy.spawn('amixer -c 0 -q set Master 2dB-')),
    Key([], 'XF86AudioPlay',
        lazy.spawn(util.spotify('play-pause'))),
    Key([], 'XF86AudioPrev',
        lazy.spawn(util.spotify('previous'))),
    Key([], 'XF86AudioNext',
        lazy.spawn(util.spotify('next'))),

    # backlight controls
    Key([], "XF86MonBrightnessUp", lazy.spawn("light -A 10")),
    Key([], "XF86MonBrightnessDown", lazy.spawn("light -U 10")),
]


def make_keys(base_mods, *entries):
    keys = []
    for entry in entries:
        key, handler = entry[-2:]
        modifiers = base_mods + list(entry[:-2] if len(entry) > 2 else [])
        keys.append(Key(modifiers, key, handler))
    return keys


keys = xf86_keys() + group_keys + spawner_keys
keys = keys + make_keys(
    [consts.MODKEY],  # base modifiers for all entries

    # high-level management
    ("space", lazy.next_layout()),                      # cycle layouts
    ("q", lazy.window.kill()),                          # kill window
    ("r", lazy.restart()),                              # restart qtile
    ("shift", "l", lazy.shutdown()),                    # kill qtile

    # floating management
    ("t", lazy.window.disable_floating()),              # embed float
    ("shift", "t", lazy.window.enable_floating()),      # pop tile

    # focus
    ("k", lazy.layout.down()),                          # focus left
    ("j", lazy.layout.up()),                            # focus right

    # movement
    ("shift", "k", lazy.layout.shuffle_down()),         # move tile left
    ("shift", "j", lazy.layout.shuffle_up()),           # move tile right
    ("shift", "space", lazy.layout.flip()),             # flip orientation

    # size
    ("i", lazy.layout.grow()),                          # increase tile size
    ("m", lazy.layout.shrink()),                        # decrease tile size
    ("n", lazy.layout.normalize()),                     # equalize tiles
    ("o", lazy.layout.maximize()),                      # maximize tile

    # theme
    ("w", lazy.function(theme.regen)),
    ("shift", "w", lazy.spawn("wpg-reset")),
    ("shift", "a", lazy.function(theme.reload)),
    ("Down", lazy.spawn("wpg-desaturate")),
    ("shift", "Up", lazy.spawn("wpg-brighten")),
    ("shift", "Down", lazy.spawn("wpg-darken")),
    ("Up", lazy.spawn("wpg-saturate")),
    ("Left", lazy.spawn("wpg-normalize")),
    ("Right", lazy.spawn("wpg-shuffle")),
)
