{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.workstation.steam.enable = mkEnableOption "steam";
  config = mkIf config.mine.workstation.steam.enable {
   hardware.opengl = {
      enable = true;
      driSupport32Bit = true;
    };

   # optionally enable 32bit pulseaudio support if pulseaudio is enabled
   hardware.pulseaudio.support32Bit = config.hardware.pulseaudio.enable;
   hardware.steam-hardware.enable = true;
   environment.systemPackages = [ pkgs.steam ];
  };
}

