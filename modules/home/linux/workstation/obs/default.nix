{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation.obs;

in {
  options.mine.workstation.obs.enable = mkEnableOption "obs";

  config = mkIf cfg.enable {
    home.packages = [ pkgs.obs-studio ];
  };
}
