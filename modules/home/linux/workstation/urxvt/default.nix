{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation.urxvt;
  urxvt-bordered = pkgs.writeShellScriptBin "urxvt-bordered" ''
    ${pkgs.rxvt_unicode-with-plugins}/bin/urxvt --internalBorder 15
  '';

in {
  options.mine.workstation.urxvt.enable = mkEnableOption "urxvt";

  config = mkIf cfg.enable {
    home.packages = [ pkgs.rxvt_unicode-with-plugins urxvt-bordered ];
    xdg.configFile."wpg/templates/Xresources.base".source = ./Xresources;
    home.activation.Xresources = symlink "~/.config/wpg/templates/Xresources" "~/.Xresources";
  };
}
