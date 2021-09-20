{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.retroarch;
in {
  options.mine.workstation.retroarch.enable = mkEnableOption "retroarch";

  config = mkIf cfg.enable {
    nixpkgs.config.retroarch = {
      enableDolphin = true;
      enableMGBA = true;
      enableMAME = true;
      enableDOSBox = true;
      enableGenesisPlusGX= true;
    };
    home.packages = [ pkgs.retroarch ];
  };
}
