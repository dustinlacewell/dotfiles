{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.bluetooth = mkEnableOption "bluetooth";

  config = mkIf config.mine.bluetooth {
    hardware.bluetooth.enable = true;
    hardware.bluetooth.package = pkgs.unstable.bluezFull;
  };
}

