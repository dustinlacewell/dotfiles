{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.staruml;
in {
  options.mine.workstation.staruml.enable = mkEnableOption "workstation.staruml";
  config = mkIf cfg.enable {
    home.packages = [ (pkgs.writeShellScriptBin "staruml" "${pkgs.staruml}/bin/staruml") ];
  };
}
