## Main prompt
build_prompt() {
    RETVAL=$?
    prompt_status
    prompt_virtualenv
    prompt_dir
    prompt_git
    prompt_bzr
    prompt_hg
    prompt_end
}

ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[blue]%})"
ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[blue]%}) %{$fg[yellow]%}✗"
ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg_bold[blue]%}(%{$fg[red]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%} "
setopt prompt_subst

bindkey -s '^[L' 'ls -la\n'
