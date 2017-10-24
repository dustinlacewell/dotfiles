{ pkgs, ... }: {
  home.packages = [ pkgs.aws ];
  programs.zsh.oh-my-zsh.plugins = [ "aws" ];
}
