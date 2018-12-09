{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.tig.enable = mkEnableOption "tig";

  config = mkIf config.mine.tig.enable {
    home.packages = [ pkgs.tig ];
    programs.zsh.oh-my-zsh.plugins = [ "tig" ];
  };
}
