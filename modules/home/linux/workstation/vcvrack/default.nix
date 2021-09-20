{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.vcvrack;
in {
  options.mine.workstation.vcvrack.enable = mkEnableOption "workstation.vcvrack";
  config = mkIf cfg.enable {
    home.packages = [ pkgs."vcv-rack" ];
  };
}
