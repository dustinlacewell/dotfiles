{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.ddclient.enable = mkEnableOption "ddclient";

  config = mkIf config.mine.ddclient.enable {
    services.ddclient = {
      enable = true;
      protocol = "noip";
      username = secrets.noip-username;
      password = secrets.noip-password;
      server = "dynupdate.no-ip.com";
      domains = ["secrets.noip-hostname"];
    };
  };
}
