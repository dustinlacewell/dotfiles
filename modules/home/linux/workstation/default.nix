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
      (wine.override { wineBuild = "wineWow"; })
    ];

    mine.workstation = enableMultiple [
      "autocutsel"
      "browser-sync"
      "cdda"
      "discord"
      "emacs"
      "evince"
      "imgur-screenshot"
      "postman"
      "pycharm"
      "pywal"
      "qtile"
      "qutebrowser"
      "recap"
      "rofi"
      "rider"
      "twmn"
      "urxvt"
      "wpgtk"
      "vscode"
    ];
  };
}

