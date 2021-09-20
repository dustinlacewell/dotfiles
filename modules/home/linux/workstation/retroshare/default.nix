{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.retroshare;
  utils = import /nixcfg/util;

in {
  options.mine.workstation.retroshare.enable = mkEnableOption "retroshare";

  config = mkIf cfg.enable {
    home.packages = [ pkgs.retroshare ];
  };
}

