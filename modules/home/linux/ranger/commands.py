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


class moveselected(Command):
    """:moveselected <target_directory>"""

    def execute(self):
        cwd = self.fm.thisdir
        cf = self.fm.thisfile
        if not cwd or not cf:
            self.fm.notify("Error: no file(s) selected", bad=True)
            return
        files = [f for f in self.fm.thistab.get_selection()]

        target_dir = self.rest(1)
        if not target_dir:
            self.fm.notify("Error: target directory not specified", bad=True)
            return

        from os.path import join, expanduser, lexists
        from os import makedirs
        target_dir = join(self.fm.thisdir.path, expanduser(target_dir))
        if not lexists(target_dir):
            makedirs(target_dir)
        for f in files:
            self.fm.rename(f, join(target_dir, f.relative_path))


    def tab(self):
        return self._tab_directory_content()
