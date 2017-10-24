{ pkgs, ... }: {
  home.packages = [ pkgs.git ];
  programs.zsh.oh-my-zsh.plugins = [ "git" ];
}
