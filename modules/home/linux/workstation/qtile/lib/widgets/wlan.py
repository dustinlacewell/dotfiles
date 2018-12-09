from libqtile.widget import Wlan

from lib.theme import theme


wlan = theme.r(
    Wlan,
    foreground="{{blue}}",
    interface="wlp2s0", format="{essid}",
    disconnected_message="")
