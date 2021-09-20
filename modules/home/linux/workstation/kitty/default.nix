{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation.kitty;
  kitty = (pkgs.writeScriptBin "kitty" ''
    #!${pkgs.stdenv.shell}
    gpu ${pkgs.kitty}/bin/kitty
  '');

in {
  options.mine.workstation.kitty.enable = mkEnableOption "kitty";

  config = mkIf cfg.enable {
    home.packages = [ pkgs.kitty ];
    xdg.configFile."wpg/templates/kitty.conf.base".source = ./kitty.conf;
    home.activation.kitty = symlink "~/.config/wpg/templates/kitty.conf" "~/.config/kitty/kitty.conf";
  };
}
