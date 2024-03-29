{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

with { cfg = config.mine.workstation; };

{
  options.mine.workstation.enable = mkEnableOption "Workstation Profile";

  config = mkIf cfg.enable {
    environment.systemPackages = [ pkgs.vulkan-loader pkgs.vulkan-tools ];

    services.xserver.enable = true;
    services.xserver.desktopManager.xterm.enable = false;
    services.xserver.windowManager.qtile.enable = true;
    services.xserver.desktopManager.xfce = { enable = true; enableXfwm = false; noDesktop = true; };
    services.xserver.exportConfiguration = true;
    mine.workstation = enableMultiple [
      "fonts"
      "monitor"
      "networking"
      "power"
      "sound"
      "steam"
    ];
  };
}

