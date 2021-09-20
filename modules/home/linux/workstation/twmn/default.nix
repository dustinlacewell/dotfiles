{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.twmn;
  utils = import /nixcfg/util;

in {
  options.mine.workstation.twmn.enable = mkEnableOption "twmn";

  config = mkIf cfg.enable {
    xdg.configFile = {
      "wal/templates/twmn.conf.base".source = ./twmn.conf;
    };

    home.activation.twmn =
      symlink "~/.config/wpg/templates/twmn.conf" "~/.config/twmn/twmn.conf";

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
  };
}
