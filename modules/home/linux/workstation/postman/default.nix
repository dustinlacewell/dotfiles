{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.postman;

in {
  options.mine.workstation.postman.enable = mkEnableOption "workstation.postman";

  config = mkIf cfg.enable {
    home.packages = [ pkgs.postman ];
  };
}

