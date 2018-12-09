from libqtile import hook

from lib import util


# float dialog windows
@hook.subscribe.client_new
def dialogs(window):
    if (window.window.get_wm_type() == 'dialog' or
        window.window.get_wm_transient_for()):
        window.floating = True


@hook.subscribe.startup
def autostart():
    util.call("qtile-startup")
