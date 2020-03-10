{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.cdda;
  utils = import /nixcfg/util;
  nixpkgs = utils.fetchNixpkgs {
    rev    = "f7dacc3ae239155420339bb6dac52967e1ffb0a0";
    sha256 = "12zm5izwcr8kyngmq81vmv1fdkfxjrpmp3lx5ih37y9x0csray3n";
  };

in {
  options.mine.workstation.cdda.enable = mkEnableOption "cdda";

  config = mkIf cfg.enable {
    home.packages = [ nixpkgs.cataclysm-dda-git ];
  };
}

