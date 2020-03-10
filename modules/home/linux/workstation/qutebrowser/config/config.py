import os


c.url.start_pages = ["http://reddit.com/"]

# Themeing
config.source("theme.py")

# Bindings
config.source("keys.py")

# Completion
c.completion.height = "65%"
c.completion.shrink = True

# Behaviors
c.messages.timeout = 6000
c.confirm_quit = ['always']
c.downloads.location.directory = "~/dl/"
c.content.autoplay = False
c.editor.command = ["emacs", "-nw", "-Q", "{}"]
c.hints.auto_follow_timeout = 100

# Tabs
c.tabs.show = 'always'
c.tabs.tabs_are_windows = False
c.tabs.background = True
c.new_instance_open_target = 'tab'

# Display
c.qt.highdpi = True
c.window.title_format = 'qutebrowser'
c.scrolling.bar = "always"
c.scrolling.smooth = False

c.spellcheck.languages = ["en-US"]

c.url.searchengines = {
    'DEFAULT': 'https://www.google.com/search?q={}',
    'w': 'http://en.wikipedia.org/wiki/Special:Search?search={}',
}

c.content.host_blocking.lists = [
    'https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/fakenews-gambling-porn/hosts'
]


