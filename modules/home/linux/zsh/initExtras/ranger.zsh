# this prevents nested rangers
ranger() {
    if [ -z "$RANGER_LEVEL" ]; then
        exec command ranger < $TTY > $TTY 2>&1
    else
        exit
    fi
}

zle -N ranger
bindkey '^[[24~^[[24~' ranger
