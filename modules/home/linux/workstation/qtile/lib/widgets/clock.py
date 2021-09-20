from libqtile.widget import Clock

from lib.theme import theme


clock = theme.r(
    Clock,
    format='%H:%M %d/%m/%y',
    padding=6,
    foreground="{{light-green}}")
