from libqtile.config import Click, Drag
from libqtile.command import lazy

from lib import consts


mouse = [
    # pop tile
    Drag([consts.MODKEY], "Button1", lazy.window.set_position_floating(),
         start=lazy.window.get_position()),

    # resize float
    Drag([consts.MODKEY], "Button3", lazy.window.set_size_floating(),
         start=lazy.window.get_size()),

    # show float
    Click([consts.MODKEY], "Button2", lazy.window.bring_to_front()),
]
