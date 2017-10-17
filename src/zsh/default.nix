{ pkgs, ... }:

{

  home.packages = [
    pkgs.aws
    pkgs.fasd
    pkgs.httpie
    pkgs.nano
    pkgs.tig
  ];

  programs.zsh = {
    enable = true;
    dotDir = ".config/zsh";
    enableAutosuggestions = true;
    enableCompletion = true;
    history.size = 100000;

    sessionVariables = {
      EDITOR="nano";
      PATH="$HOME/bin:$PATH";
    };

    oh-my-zsh = {
      enable = true;
      theme = "agnoster";
      plugins = [
        "aws"
        "common-aliases"
        "docker"
        "fasd"
        "git"
        "httpie"
        "shink-path"
        "tig"
      ];
    };

    shellAliases = {
      ts = ''tig status'';
      hm = ''${pkgs.home-manager}/bin/home-manager'';

      j = ''z'';

      # auto create parent directories
      mkdir = ''mkdir -pv'';

      # docker aliases
      dps = ''docker ps'';
      drm = ''docker rm -f $(docker ps -aq)'';
      drmi = ''docker rmi $(docker images | grep "<none>" | awk "{print $3}")'';
    };

    initExtra = ''
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
    '';

  };
}
