{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.lepton;
  lepton = import ./package.lib.nix { inherit pkgs lib; };
in {
  options.mine.workstation.lepton = {
    enable = mkEnableOption "workstation.lepton";
  };

  config = mkIf config.mine.workstation.lepton.enable {
    home.packages = [ lepton ];
  };
}

