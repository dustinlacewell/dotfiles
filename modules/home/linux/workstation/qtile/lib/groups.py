from libqtile.command import lazy
from libqtile.config import DropDown, Key, Group, ScratchPad

from lib import util, consts


def make_workspaces(modifiers, names):
    groups = []
    keys = []
    for name in names:
        # switch to group
        keys.append(
            Key(modifiers, name, lazy.group[name].toscreen())
        )
        # move tile to group
        keys.append(
            Key(modifiers + ["shift"], name, lazy.window.togroup(name))
        )
        groups.append(Group(name))
    return groups, keys


def make_scratchpad(modifiers, *entries):
    keys = []
    name = util.random_string()
    dropdowns = []
    for key, command in entries:
        dd_name = "{}-{}".format(name, key)
        new_key = Key(modifiers, key, lazy.group[name].dropdown_toggle(dd_name))
        keys.append(new_key)
        new_dropdown = DropDown(dd_name, command,
                                x=0, y=0,
                                width=0.999, height=0.5)
        dropdowns.append(new_dropdown)
    return ScratchPad(name, dropdowns), keys


workspaces, workspace_keys = make_workspaces([consts.MODKEY], "asdfgzxcvb")
scratchpad, scratchpad_keys = make_scratchpad(
    [consts.MODKEY],
    ("e", "emacs"),
    ("8", util.sh("cd ~/src/emacs-nougat; bin/build-elisp.sh ldlework")),
    ("9", util.sh("switch")),
    ("0", util.sh("hm-switch")),
    ("semicolon", "urxvt -e ranger"))

groups = workspaces + [scratchpad]
keys = workspace_keys + scratchpad_keys
