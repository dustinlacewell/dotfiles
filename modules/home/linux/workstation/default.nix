{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

{
  options.mine.workstation.enable = mkEnableOption "workstation";

  config = mkIf config.mine.workstation.enable {

    home.packages = with pkgs; [
      mpv
      pqiv
      spotify
    ];

    mine.workstation = enableMultiple [
      "autocutsel"
      "discord"
      "emacs"
      "evince"
      "imgur-screenshot"
      "pywal"
      "qtile"
      "qutebrowser"
      "recap"
      "rofi"
      "twmn"
      "urxvt"
    ];
  };
}

