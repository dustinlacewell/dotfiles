# disable insert mode completely
c.input.insert_mode.auto_enter = False
c.input.insert_mode.auto_leave = False
c.input.insert_mode.plugins = False

# Forward unbound keys
c.input.forward_unbound_keys = "all"

ESC_BIND = 'clear-keychain ;; search ;; fullscreen --leave'

c.bindings.default['normal'] = {}
# Bindings
c.bindings.commands['normal'] = {
    # Navigation
    '<ctrl-v>': 'scroll-page 0 0.5',
    '<alt-v>': 'scroll-page 0 -0.5',
    '<ctrl-shift-v>': 'scroll-page 0 1',
    '<alt-shift-v>': 'scroll-page 0 -1',
    # FIXME come up with logical bindings for scrolling left/right

    # Commands
    '<ctrl-y>': 'yank',
    '<alt-x>': 'set-cmd-text :',
    '<ctrl-x>b': 'set-cmd-text -s :buffer',
    '<ctrl-x>k': 'tab-close',
    '<ctrl-x><ctrl-c>': 'quit',
    '<ctrl-x><ctrl-t>': 'config-cycle -t -p content.host_blocking.enabled',

    # searching
    '<ctrl-s>': 'set-cmd-text /',
    '<ctrl-r>': 'set-cmd-text ?',

    # history
    '<ctrl-l>': 'forward',
    '<ctrl-h>': 'back',

    # tabs
    '<ctrl-k>': 'tab-next',
    '<ctrl-j>': 'tab-prev',
    '<ctrl-shift-j>': 'tab-move -',
    '<ctrl-shift-k>': 'tab-move +',
    '<alt-p>': 'tab-pin',
    '<alt-1>': 'tab-focus 1',
    '<alt-2>': 'tab-focus 2',
    '<alt-3>': 'tab-focus 3',
    '<alt-4>': 'tab-focus 4',
    '<alt-5>': 'tab-focus 5',
    '<alt-6>': 'tab-focus 6',
    '<alt-7>': 'tab-focus 7',
    '<alt-8>': 'tab-focus 8',
    '<alt-9>': 'tab-focus 9',
    '<alt-0>': 'tab-focus -1',

    # hints
    '<alt-o>': 'hint all',
    '<alt-y>': 'hint all yank',
    '<alt-t>': 'hint all tab',

    # open links
    '<ctrl-o>': 'set-cmd-text -s :open',
    '<ctrl-t>': 'set-cmd-text -s :open -t',
    '<ctrl-x>e': 'set-cmd-text -s :open {url:pretty}',

    # editing
    '1': 'fake-key 1',
    '2': 'fake-key 2',
    '3': 'fake-key 3',
    '4': 'fake-key 4',
    '5': 'fake-key 5',
    '6': 'fake-key 6',
    '7': 'fake-key 7',
    '8': 'fake-key 8',
    '9': 'fake-key 9',
    '0': 'fake-key 0',
    '<alt-a>': 'fake-key <ctrl-a>',
    '<alt-k>': 'fake-key <alt-shift-right><ctrl-x>',
    '<alt-shift-k>': 'fake-key <alt-shift-left><ctrl-x>',
    '<ctrl-f>': 'fake-key <right>',
    '<ctrl-shift-f>': 'fake-key <shift-right>',
    '<ctrl-b>': 'fake-key <left>',
    '<ctrl-shift-b>': 'fake-key <shift-left>',
    '<ctrl-a>': 'fake-key <home>',
    '<ctrl-e>': 'fake-key <end>',
    '<ctrl-n>': 'fake-key <down>',
    '<ctrl-p>': 'fake-key <up>',
    '<alt-f>': 'fake-key <ctrl-right>',
    '<alt-shift-f>': 'fake-key <ctrl-shift-right>',
    '<alt-b>': 'fake-key <ctrl-left>',
    '<alt-shift-b>': 'fake-key <ctrl-shift-left>',
    '<ctrl-d>': 'fake-key <delete>',
    '<alt-d>': 'fake-key <ctrl-delete>',
    '<alt-backspace>': 'fake-key <ctrl-backspace>',
    '<ctrl-w>': 'fake-key <Ctrl-backspace>',
    '<ctrl-y>': 'insert-text {primary}',
    '<alt-l>': 'spawn --userscript qute-lastpass',


    # escape hatch
    '<ctrl-c>h': 'set-cmd-text -s :help',
    '<ctrl-g>': ESC_BIND,
}

c.bindings.commands['command'] = {
    '<ctrl-s>': 'search-next',
    '<ctrl-r>': 'search-prev',

    '<ctrl-p>': 'completion-item-focus prev',
    '<ctrl-n>': 'completion-item-focus next',

    '<alt-p>': 'command-history-prev',
    '<alt-n>': 'command-history-next',

    # escape hatch
    '<ctrl-g>': 'leave-mode',
}

c.bindings.commands['hint'] = {
    # escape hatch
    '<ctrl-g>': 'leave-mode',
}

c.bindings.commands['caret'] = {
    # escape hatch
    '<ctrl-g>': 'leave-mode',
}
