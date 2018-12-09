{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.efi = mkEnableOption "EFI Bootloader";

  config = mkIf config.mine.efi {
    # Use the systemd-boot EFI boot loader.
    boot.loader.systemd-boot.enable = true;
    boot.loader.efi.canTouchEfiVariables = true;
  };
}
