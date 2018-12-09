from libqtile.widget import CurrentLayoutIcon

from lib.theme import theme


currentlayout = theme.r(
    CurrentLayoutIcon,
    scale=.85,
    foreground="{{foreground}}")
