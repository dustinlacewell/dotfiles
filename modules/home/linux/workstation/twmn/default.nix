{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

with import <home-manager/modules/lib/dag.nix> { inherit lib; };

let
  cfg = config.mine.workstation.twmn;

in {
  options.mine.workstation.twmn.enable = mkEnableOption "twmn";

  config = mkIf cfg.enable {
    xdg.configFile = {
      "wal/templates/twmn.conf".source = ./twmn.conf;
    };

    home.activation.twmn =
      symlink "~/.cache/wal/twmn.conf" "~/.config/twmn/twmn.conf";

    home.packages = [
      pkgs.twmn
      (writeSubbedBin  {
        name = "twmn-msg";
        src = ./bin/twmn-msg;
      })
      (writeSubbedBin  {
        name = "twmn-err";
        src = ./bin/twmn-err;
      })
    ];

    mine.workstation.pywal.loadScript = ''
      ${pkgs.procps}/bin/pkill -f twmnd
      ${pkgs.twmn}/bin/twmnd &
    '';

  };
}
