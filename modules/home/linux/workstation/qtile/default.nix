{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.qtile;

in {
  options.mine.workstation.qtile.enable = mkEnableOption "qtile";
  options.mine.workstation.qtile.startupCommands = mkOption {
    type = types.lines;
  };

  config = mkIf cfg.enable {
    xdg.configFile = {
      "qtile/config.py".source = ./config.py;
      "qtile/lib/".source = ./lib;
    };

    mine.workstation.qtile.startupCommands = ''
      ${pkgs.networkmanagerapplet}/bin/nm-applet &
    '';

    home.packages = [
      pkgs.playerctl pkgs.xsel

      (pkgs.writeScriptBin "qtile-startup" ''
        #!${pkgs.stdenv.shell}
        ${cfg.startupCommands}
      '')

      (writeSubbedBin  {
        name = "mute";
        src = ./bin/mute.sh;
      })

      (writeSubbedBin {
        name = "qtile-xephyr";
        src = ./bin/qtile-xephyr;
        qtile = pkgs.qtile;
        python = pkgs.python;
      })
    ];
  };
}
