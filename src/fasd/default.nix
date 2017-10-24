{ pkgs, ... }: {
  home.packages = [ pkgs.fasd ];
  programs.zsh.oh-my-zsh.plugins = [ "fasd" ];
}
