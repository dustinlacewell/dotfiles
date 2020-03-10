{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.workstation.steam.enable = mkEnableOption "eam";
  config = mkIf config.mine.workstation.steam.enable {
    nixpkgs.config.allowUnfree = true;
    environment.systemPackages = [ pkgs.unstable.steam ];
  };
}

