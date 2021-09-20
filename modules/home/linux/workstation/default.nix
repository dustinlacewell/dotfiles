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
      libnotify
      alacritty
      discord
      deluge
      cowsay
    ];

    xdg.dataFile."fonts/extraFonts".source = ./fonts;

    mine.workstation = enableMultiple [
      "autocutsel"
      # "basilisk"
      # "browser-sync"
      # "cdda"
      "chrome"
      # "discord"
      "dunst"
      "emacs"
      "evince"
      # "godot"
      # "imgur-screenshot"
      "kitty"
      # "katago"
      # "lepton"
      # "mathematica"
      "node"
      # "orca"
      "obs"
      "java"
      "postman"
      # "pycharm"
      "qtile"
      # "qutebrowser"
      "recap"
      # "rpcs3"
      # "retroarch"
      "rofi"
      # "rider"
      # "sabaki"
      # "sunvox"
      # "sheepshaver"
      # "staruml"
      # "urxvt"
      "wpgtk"
      # "vcvrack"
      "vscode"
    ];
  };
}

