# -*- coding: utf-8 -*-
from libqtile.widget.battery import Battery

from lib.theme import theme


class Battery(Battery):
    def _get_text(self):
        result = super(Battery, self)._get_text()
        return result
        if result == 'Full':
            self.fmt.format(percent="100")
        return result

battery = theme.r(Battery,
                  discharge_char="",
                  foreground="{{light-green}}",
                  low_foreground="{{gray}}",
                  padding=0,
                  format=u"⚡ {percent:2.0%}")
