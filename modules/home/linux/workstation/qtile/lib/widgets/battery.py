# -*- coding: utf-8 -*-
from libqtile import widget

from lib.theme import theme


class Battery(widget.Battery):
    def _get_text(self):
        result = super(Battery, self)._get_text()
        if result == 'Full':
            self.format.format(percent="100")
        return result

battery = theme.r(Battery,
                  discharge_char="",
                  foreground="{{green}}",
                  low_foreground="#FF0000",
                  padding=0,
                  format=u"⚡ {percent:2.0%}")
