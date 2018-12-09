{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.workstation.autocutsel.enable = mkEnableOption "autocutsel";

  config = mkIf config.mine.workstation.autocutsel.enable {
    systemd.user.services."autocutsel" = {
      Unit = {
        Description = "Network Manager applet";
        After = [ "graphical-session-pre.target" ];
        PartOf = [ "graphical-session.target" ];
      };

      Install = {
        WantedBy = [ "graphical-session.target" ];
      };

      Service = {
        Type = "forking";
        Restart = "always";
        RestartSec = 2;
        ExecStartPre = "${pkgs.autocutsel}/bin/autocutsel -fork";
        ExecStart = "${pkgs.autocutsel}/bin/autocutsel -selection PRIMARY -fork";
      };
    };
  };
}

