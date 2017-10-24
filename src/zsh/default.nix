{ pkgs, ... }:

{
  home.packages = [
    pkgs.nano
  ];

  programs.zsh = {
    enable = true;
    dotDir = ".config/zsh";
    history.size = 100000;

    enableAutosuggestions = true;
    enableCompletion = true;

    shellAliases = import ./aliases.nix;
    initExtra = builtins.readFile ./initExtras;

    sessionVariables = {
      EDITOR="nano";
      PATH="$HOME/bin:$PATH";
    };

    oh-my-zsh = {
      enable = true;
      theme = "agnoster";
      plugins = [ "common-aliases" "shink-path" ];
    };
  };
}
