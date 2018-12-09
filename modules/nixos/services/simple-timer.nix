{ config, lib, pkgs, ... }:

with lib;

{
  options.mine.simple-timer.enable = mkEnableOption "simple-timer";

  config = mkIf config.mine.simple-timer.enable {
    systemd = {
      timers.simple-timer = {
        wantedBy = [ "timers.target" ];
        partOf = [ "simple-timer.service" ];
        timerConfig.OnCalendar = "minutely";
      };
      services.simple-timer = {
        serviceConfig.Type = "oneshot";
        serviceConfig.Umask = "0022";
        script = ''
          echo "Time: $(date)." >> /tmp/simple-timer.log
        '';
      };
    };
  };
}
