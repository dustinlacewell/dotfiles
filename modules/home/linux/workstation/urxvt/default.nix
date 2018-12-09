{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation.urxvt;

in {
  options.mine.workstation.urxvt.enable = mkEnableOption "urxvt";

  config = mkIf cfg.enable {
    home.packages = [ pkgs.rxvt_unicode-with-plugins ];
    xdg.configFile."wal/templates/Xresources".source = ./Xresources;
    home.activation.Xresources = symlink "~/.cache/wal/Xresources" "~/.Xresources";
  };
}
