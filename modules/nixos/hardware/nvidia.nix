{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.nvidia = mkEnableOption "Nvidia Support";

  config = mkIf config.mine.nvidia {
    # Nvidia support
    boot.blacklistedKernelModules = [ "nouveau" "bbswitch" ];
    boot.extraModulePackages = [ pkgs.linuxPackages.nvidia_x11 ];

    hardware.bumblebee = {
      enable = true;
      pmMethod = "none";
    };

    environment.systemPackages = with pkgs; [
      nvme-cli
    ];
  };
}
