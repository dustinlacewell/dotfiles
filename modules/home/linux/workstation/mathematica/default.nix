{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.mathematica;
  utils = import /nixcfg/util;
  mathematica = pkgs.mathematica11.overrideAttrs (old: rec {
    src = /home/ldlework/src/wolfram/mathematica/mathematica.sh;
  });

in {
  options.mine.workstation.mathematica.enable = mkEnableOption "mathematica";

  config = mkIf cfg.enable {
    home.packages = [ mathematica ];
  };
}
