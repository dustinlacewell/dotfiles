{ pkgs, ... }: {
  home.packages = [ pkgs.httpie ];
  programs.zsh.oh-my-zsh.plugins = [ "httpie" ];
}
