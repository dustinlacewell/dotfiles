# Patched from ranger commit 8d4808fc

import os

from ranger.api.commands import Command
from ranger.config.commands import shell

class rangershell(shell):
    def execute(self):
        super(rangershell, self).execute()
        if self.arg(1) and self.arg(1)[0] == '-':
            flags = self.arg(1)[1:]
            command = self.rest(2)
        else:
            flags = ''
            command = self.rest(1)
        if command == "$SHELL":
            user = os.environ['USER']
            filename = "/tmp/rangershelldir-" + os.environ['USER']
            try:
                with open(filename, "r") as f:
                    self.fm.cd(f.readline().strip())
                    os.unlink(filename)
            except IOError:
                pass
