# -*- coding: utf-8 -*-

from libqtile.widget import base
from subprocess import CalledProcessError

from lib.theme import theme
from lib.util import copytext, output


class Spotify(base.InLoopPollText):
    """Shows current track playing in Spotify"""
    orientations = base.ORIENTATION_HORIZONTAL

    def __init__(self, *args, **kwargs):
        kwargs["markup"] = False
        kwargs["update_interval"] = 1.0
        kwargs["foreground"] = self.old_colour = kwargs["foreground"]
        super(Spotify, self).__init__(*args, **kwargs)

    def info(self, query):
        return output("playerctl -p spotify " + query)

    def copy_metadata(self):
        url = self.info("metadata xesam:url")
        copytext(url)

    def button_press(self, x, y, button):
        if button == 1:
            self.copy_metadata()

    def poll(self):
        try:
            status = self.info("status")
            title = self.info("metadata xesam:title")
            artist = self.info("metadata xesam:artist")

            if status.strip() == 'Playing':
                self.layout.colour = theme['light_green']
            else:
                self.layout.colour = theme['green']

            if self.layout.colour != self.old_colour:
                self.bar.draw()
                self.old_color = self.layout.colour
            return "🎶 {} by {}".format(title, artist)
        except CalledProcessError:
            return ""
        except Exception, e:
            return str(e)


spotify = theme.r(Spotify, foreground="{{light_green}}")
