{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.httpie.enable = mkEnableOption "httpie";

  config = mkIf config.mine.httpie.enable {
    home.packages = [ pkgs.httpie ];
    programs.zsh.oh-my-zsh.plugins = [ "httpie" ];
  };
}
