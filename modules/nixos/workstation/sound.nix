{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.workstation.sound.enable = mkEnableOption "workstation.sound";

  config = mkIf config.mine.workstation.sound.enable {
    sound.enable = true;

    hardware = {
      bluetooth.config = {
        General = {
          Enable = "Source,Sink,Media,Socket";
        };
      };

      pulseaudio = {
        enable = true;
        extraModules = [ pkgs.pulseaudio-modules-bt ];
        package = pkgs.pulseaudioFull.override { jackaudioSupport = true; };
        support32Bit = true;
        configFile = pkgs.writeText "default.pa" ''
          load-module module-bluetooth-policy
          load-module module-bluetooth-discover
          load-module module-bluez5-device
          load-module module-bluez5-discover
          '';
        extraConfig = ''
          load-module module-switch-on-connect
        '';
      };
    };

    environment.systemPackages = with pkgs; [
      pavucontrol pa_applet qjackctl jack2
    ];

    # systemd.services.jack.serviceConfig.SupplementaryGroups = [ "users" ];
    # systemd.user.services.pulseaudio.environment.JACK_PROMISCUOUS_SERVER = "jack";

    services.jack = {
      jackd = {
        enable = true;
        extraOptions = [ "-dalsa" "--device" "hw:Microphone"];
      };
      # support ALSA only programs via ALSA JACK PCM plugin
      alsa.enable = false;
      # support ALSA only programs via loopback device (supports programs like Steam)
      loopback = {
        enable = true;
        # buffering parameters for dmix device to work with ALSA only semi-professional sound programs
        dmixConfig = ''
          period_size 2048
        '';
      };
    };

    users.extraUsers.ldlework.extraGroups = [ "jackaudio" ];

    boot.kernelModules = [ "snd-seq" "snd-rawmidi" ];

    # systemd.user.services.pulseaudio.environment = {
    #   JACK_PROMISCUOUS_SERVER = "jackaudio";
    # };

  };

}

