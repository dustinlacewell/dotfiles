from libqtile import layout
from libqtile.layout.xmonad import MonadTall, MonadWide
from libqtile.layout.columns import Columns

from lib.theme import theme


layout_settings = dict(
    margin=20,
    border_width=2,
    border_normal=theme['background'],
    border_focus=theme['foreground'],
)

layouts = [
    Columns(num_columns=1, split=False, **layout_settings),
    MonadTall(**layout_settings),
    MonadWide(**layout_settings),
]

floating_layout = layout.Floating(
    float_rules=[
        {'wmclass': 'confirm'},
        {'wmclass': 'error'},
        {'wmclass': 'ssh-askpass'},
        {'wname': 'pinentry'},
        {'wname': 'YAD'},
        {'wname': 'pygame window'},
        {'wmclass': 'gmrun'},
    ],
    **layout_settings
)
