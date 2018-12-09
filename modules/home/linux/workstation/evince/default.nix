{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

with import <home-manager/modules/lib/dag.nix> { inherit lib; };


let
  cfg = config.mine.workstation.evince;

in {
  options.mine.workstation.evince.enable = mkEnableOption "evince";

  config = mkIf cfg.enable {
    home.packages = [ pkgs.evince ];
    home.activation.defaultPDFReader = dagEntryBefore [ "linkGeneration" ] ''
      xdg-mime default evince.desktop application/pdf
    '';

    xdg.dataFile = {
      "applications/evince.desktop".source = ./evince.desktop;
    };
  };
}
