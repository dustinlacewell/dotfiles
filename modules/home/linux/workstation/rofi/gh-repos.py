#!@python@/bin/python

import os
import json
import sys
from pathlib import Path as P
from subprocess import check_output, CalledProcessError

from xdg import (XDG_CACHE_HOME, XDG_CONFIG_DIRS, XDG_CONFIG_HOME,
                 XDG_DATA_DIRS, XDG_DATA_HOME, XDG_RUNTIME_DIR)

import click
from rofi import Rofi

from github3 import authorize, GitHubError


def _getenv(variable: str, default: str) -> str:
    """Get an environment variable."""
    return os.environ.get(variable) or default

GIT_CACHE_HOME = XDG_CACHE_HOME / "git"
CACHE_FILE_NAME = GIT_CACHE_HOME / "repos.json"

rofi = Rofi()

class JSONFile:

    def __init__(self, filename):
        self.filename = P(filename)
        self.filename.parent.mkdir(parents=True, exist_ok=True)
        self.filename.touch(exist_ok=True)
        self.data = None

    def __enter__(self):
        with open(self.filename, 'r') as fobj:
            text = fobj.read().strip()
        if text:
            self.data = json.loads(text)
        else:
            self.data = {}
        return self.data

    def __exit__(self, *args):
        import pdb; pdb.set_trace()
        with open(self.filename, 'w') as fobj:
            json.dump(self.data, fobj)

class JSONCache(JSONFile):
    def __init__(self):
        super(JSONCache, self).__init__(CACHE_FILE_NAME)

    def __enter__(self):
        super(JSONCache, self).__enter__()
        return self

    @property
    def auth(self):
        auth = self.data.get('auth', {})
        self.data['auth'] = auth
        return auth

    @property
    def token(self):
        return self.auth.get('token')

    @token.setter
    def token(self, val):
        self.auth['token'] = val

    @property
    def token_id(self):
        return self.auth.get('token_id')

    @token_id.setter
    def token_id(self, val):
        self.auth['token_id'] = val


def tfa_callback():
    code = ''
    while not code:
        # The user could accidentally press Enter before being ready,
        # let's protect them from doing that.
        code = rofi.text_entry('Enter 2FA code', rofi_args=["-lines", "0"])
    return code

def github_login(username=None, password=None):
    with JSONCache() as jc:
        if jc.token is None or jc.token_id is None:
            username = username or rofi.text_entry("Username")
            password = password or rofi.text_entry("Password")
            try:
                auth = authorize(username, password, ['user', 'repo'],
                                 'rofi repos', 'http://example.com/',
                                 two_factor_callback=tfa_callback)
                jc.token = auth.token
                jc.token_id = auth.id
            except GitHubError as error:
                print(error.errors)

@click.command()
@click.option("--user", default=None)
def login(user):
    github_login(user or None)

@click.group()
def main():
    pass

main.add_command(login)
main()
