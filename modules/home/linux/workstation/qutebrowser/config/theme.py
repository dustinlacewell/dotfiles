import os
from runpy import run_path


path = os.path.expanduser("~/.config/wpg/formats/colors.py")
colors = run_path(path)

bg = colors["background"]
fg = colors["foreground"]
red = colors["red"]
green = colors["green"]
yellow = colors["yellow"]
blue = colors["blue"]
purple = colors["purple"]
lightred = colors["light_red"]
lightgreen = colors["light_green"]
lightyellow = colors["light_yellow"]
lightblue = colors["light_blue"]
lightpurple = colors["light_purple"]

# Default Page Background
c.colors.webpage.bg = "#ffffff" # white

# Fonts
c.fonts.completion.category = "14pt Source Code Pro"
c.fonts.completion.entry = "14pt Source Code Pro"
c.fonts.monospace = "Source Code Pro"
c.fonts.tabs = "16pt Source Code Pro"
c.fonts.prompts = "14pt Source Code Pro"
c.fonts.statusbar = "14pt Source Code Pro"

# Tabs
c.colors.tabs.bar.bg = bg
c.colors.tabs.indicator.start = fg
c.colors.tabs.indicator.stop = fg
c.colors.tabs.indicator.error = red

# Unselected Tabs
c.colors.tabs.even.bg = bg
c.colors.tabs.even.fg = lightred
c.colors.tabs.odd.bg = bg
c.colors.tabs.odd.fg = lightred

# Selected Tabs
c.colors.tabs.selected.even.bg = bg
c.colors.tabs.selected.even.fg = fg
c.colors.tabs.selected.odd.bg = bg
c.colors.tabs.selected.odd.fg = fg

# Download Bar
c.colors.downloads.bar.bg = bg
c.colors.downloads.start.fg = fg
c.colors.downloads.stop.fg = fg
c.colors.downloads.start.bg = bg
c.colors.downloads.stop.bg = bg
c.colors.downloads.error.bg = red
c.colors.downloads.error.fg = bg

# Completion Header
c.colors.completion.category.fg = fg
c.colors.completion.category.bg = bg
c.colors.completion.category.border.top = fg
c.colors.completion.category.border.bottom = fg

# Completion Text
c.colors.completion.fg = fg
c.colors.completion.match.fg = green

# Completion Unselected Rows
c.colors.completion.even.bg = bg
c.colors.completion.odd.bg = bg

# Competion Selected Row
c.colors.completion.item.selected.bg = red
c.colors.completion.item.selected.fg = bg
c.colors.completion.item.selected.border.bottom = red
c.colors.completion.item.selected.border.top = red

# Completion Scrollbar
c.colors.completion.scrollbar.bg = bg
c.colors.completion.scrollbar.fg = fg

# Link Hints
c.colors.hints.fg = fg
c.colors.hints.bg = bg
c.hints.border = "2px solid" + fg
c.colors.hints.match.fg = green

# Key Hints
c.colors.keyhint.bg = bg
c.colors.keyhint.fg = fg
c.colors.keyhint.suffix.fg = green

# Error Messages
c.colors.messages.error.bg = red
c.colors.messages.error.fg = bg
c.colors.messages.error.border = lightred

# Info Messages
c.colors.messages.info.bg = blue
c.colors.messages.info.fg = bg
c.colors.messages.info.border = lightblue

# Warning Messages
c.colors.messages.warning.bg = yellow
c.colors.messages.warning.fg = bg
c.colors.messages.warning.border = lightyellow

# Prompts
c.colors.prompts.bg = bg
c.colors.prompts.fg = fg
c.colors.prompts.border = bg
c.colors.prompts.selected.bg = red

# Status Bar
c.colors.statusbar.normal.bg = bg
c.colors.statusbar.normal.fg = fg
c.colors.statusbar.progress.bg = fg

# Status Bar Private Browsing
c.colors.statusbar.private.bg = purple
c.colors.statusbar.private.fg = bg

# Status Bar Command-Mode
c.colors.statusbar.command.bg = bg
c.colors.statusbar.command.fg = fg
c.colors.statusbar.command.private.bg = purple
c.colors.statusbar.command.private.fg = fg

# Status Bar Caret-Mode
c.colors.statusbar.caret.bg = bg
c.colors.statusbar.caret.fg = fg
c.colors.statusbar.caret.selection.bg = green
c.colors.statusbar.caret.selection.fg = bg

# Status Bar Insert-Mode
c.colors.statusbar.insert.bg = bg
c.colors.statusbar.insert.fg = fg

# Status Bar Passthrough-Mode
c.colors.statusbar.passthrough.bg = bg
c.colors.statusbar.passthrough.fg = fg

# Status Bar URLS
c.colors.statusbar.url.fg = fg
c.colors.statusbar.url.hover.fg = blue
c.colors.statusbar.url.success.http.fg = fg
c.colors.statusbar.url.success.https.fg = fg
c.colors.statusbar.url.warn.fg = yellow
c.colors.statusbar.url.error.fg = red
