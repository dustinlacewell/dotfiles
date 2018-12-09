from libqtile.widget import GroupBox

from lib.theme import theme


groupbox = theme.r(
    GroupBox,
    margin_y=-1,
    fontsize=20,
    highlight_method='text',
    active="{{foreground}}",
    inactive="{{light_gray}}",
    this_current_screen_border="{{red}}")
