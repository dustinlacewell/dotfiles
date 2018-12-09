{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

with import <home-manager/modules/lib/dag.nix> { inherit lib; };

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
      ${pkgs.twmn}/bin/twmnd &
      ${pkgs.networkmanagerapplet}/bin/nm-applet &
    '';

    home.packages = [
      pkgs.twmn pkgs.playerctl pkgs.xsel
      (writeSubbedBin  {
        name = "mute";
        src = ./bin/mute.sh;
      })
      (pkgs.writeScriptBin "qtile-startup" ''
        #!${pkgs.stdenv.shell}
        ${cfg.startupCommands}
      '')
    ];
  };
}
