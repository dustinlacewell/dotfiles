{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation.sheepshaver;
  sheepshaver = pkgs.callPackage ./package.lib.nix {};

in {
  options.mine.workstation.sheepshaver.enable = mkEnableOption "sheepshaver";

  config = mkIf cfg.enable {
    home.packages = [ sheepshaver ];
  };
}
