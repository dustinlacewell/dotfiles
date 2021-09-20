{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.pywal;
in {
  options.mine.workstation.pywal = {
    enable = mkEnableOption "workstation.pywal";
  };

  config = mkIf cfg.enable {
    home.packages = [ pkgs.pywal pkgs.neofetch ];
  };
}

