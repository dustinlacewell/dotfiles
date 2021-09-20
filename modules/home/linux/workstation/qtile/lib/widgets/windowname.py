from libqtile.widget import WindowName

from lib.theme import theme


windowname = theme.r(
    WindowName,
    padding=8,
    margin_y=-4,
    foreground="{{light-green}}")
