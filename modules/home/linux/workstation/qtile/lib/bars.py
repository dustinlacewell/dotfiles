# -*- coding: utf-8 -*-

from libqtile.config import Screen
from libqtile.widget import CurrentLayout, CurrentLayoutIcon, GroupBox, WindowName, TextBox
from libqtile import widget, bar

from lib import widgets, consts
from lib.theme import theme


bar_height = 32

widget_defaults = dict(
    fontsize=consts.FONT_SIZE,
    font=consts.FONT_NAME,
    foreground='ffffff')

top_bar = theme.r(bar.Bar, [
    widgets.groupbox,
    widget.Spacer(),
    widgets.spotify,
    widget.Systray(),
    widget.Spacer(length=20),
    # widgets.wlan,
    widgets.battery,
    widget.Spacer(length=20),
    widgets.volume,
], bar_height, background="{{background}}")


bottom_bar = bar.Bar([
    widgets.windowname,
    widgets.observers,
    widget.Pomodoro(
        num_pomodori=2,
        length_long_break=10,
        fmt="🍅%s",
        prefix_inactive="",
        prefix_paused="⏹️️",
        prefix_break="⏸",
        prefix_long_break="⏸",
    ),
    widgets.clock,
], bar_height)

screens = [Screen(top=top_bar, bottom=bottom_bar)]
