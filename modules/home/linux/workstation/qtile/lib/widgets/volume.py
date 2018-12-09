from libqtile.widget import Volume

from lib.theme import theme


volume = theme.r(
    Volume,
    emoji=True,
    padding=10,
    foreground="{{foreground}}")
