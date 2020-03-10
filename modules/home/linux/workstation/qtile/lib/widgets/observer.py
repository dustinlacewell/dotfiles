from subprocess import CalledProcessError

from libqtile.widget import base

from lib import util
from lib.theme import theme


class O(object):
    def __init__(self, command, active, inactive=""):
        self.command = command
        self.active = active
        self.inactive = inactive

    def check(self):
        try:
            util.call(self.command)
            output = self.active
        except CalledProcessError:
            output = self.inactive
        except Exception as e:
            output = str(e)
        return output


class Observer(base.InLoopPollText):
    """Shows whether ffmpeg is running"""
    orientations = base.ORIENTATION_HORIZONTAL

    def __init__(self, targets, *args, **kwargs):
        self.targets = targets
        kwargs["markup"] = True
        super(Observer, self).__init__(*args, **kwargs)

    def poll(self):
        return " ".join([o.check() for o in self.targets])


observers = Observer([
    O("pgrep -lf nix-build",
      '<span foreground="' + theme['blue'] + '">nix</span>'),
    O("pgrep -lf nixops",
      '<span foreground="' + theme['blue'] + '">nixops</span>'),
    O("pgrep -lf ffmpeg",
      '<span foreground="' + theme['red'] + '">rec</span>'),
    O("pgrep -l less",
      '<span foreground="' + theme['red'] + '">error</span>')
], update_interval=1.0)
