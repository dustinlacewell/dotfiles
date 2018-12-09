{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.workstation.monitor.enable = mkEnableOption "workstation.monitor";

  config = mkIf config.mine.workstation.monitor.enable {
    programs.light.enable = true;
  };
}

