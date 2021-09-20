{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.rider;
  utils = import /nixcfg/util;

in {
  options.mine.workstation.pycharm.enable = mkEnableOption "pycharm";

  config = mkIf cfg.enable {
    home.packages = [ pkgs.jetbrains.pycharm-community ];
  };
}

