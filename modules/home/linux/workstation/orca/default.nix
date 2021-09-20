{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.orca;
  utils = import /nixcfg/util;
  orca = import ./derivation.lib.nix { pkgs=pkgs; };

in {
  options.mine.workstation.orca.enable = mkEnableOption "orca";

  config = mkIf cfg.enable {
    home.packages = [ orca ];
  };
}

