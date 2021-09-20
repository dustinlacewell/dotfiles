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
    theme.r(widget.Spacer, background="{{background}}"),
    widgets.spotify,
    widget.Systray(),
    theme.r(widget.Spacer, background="{{background}}", length=20),

    widgets.volume,
], bar_height, background="{{background}}")

bottom_bar = theme.r(bar.Bar, ([
    widgets.windowname,
    widgets.observers,
    widgets.clock,
]), bar_height, background="{{background}}")

screens = [Screen(top=top_bar, bottom=bottom_bar)]
