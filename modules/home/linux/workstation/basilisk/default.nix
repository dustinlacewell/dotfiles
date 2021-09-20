{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation.basilisk;
  basilisk = pkgs.callPackage ./package.lib.nix {};

in {
  options.mine.workstation.basilisk.enable = mkEnableOption "basilisk";

  config = mkIf cfg.enable {
    home.packages = [ basilisk ];
  };
}
