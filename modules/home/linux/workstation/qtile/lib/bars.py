from libqtile.config import Screen
from libqtile import widget, bar

from lib import widgets, consts
from lib.theme import theme


bar_height = 32

widget_defaults = dict(
    fontsize=consts.FONT_SIZE,
    font=consts.FONT_NAME,
    foreground=theme["foreground"])

top_bar = theme.r(bar.Bar, [
    widgets.groupbox,
    widget.Spacer(),
    widgets.spotify,
    widget.Systray(),
    widgets.wlan,
    widgets.battery,
    widgets.volume,
], bar_height, background="{{background}}")

bottom_bar = theme.r(bar.Bar, [
    widgets.currentlayout,
    widgets.windowname,
    widgets.observers,
    widgets.clock,
], bar_height, background="{{background}}")

screens = [Screen(top=top_bar, bottom=bottom_bar)]
