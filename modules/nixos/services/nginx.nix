{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.nginx.enable = mkEnableOption "nginx";

  config = mkIf config.mine.nginx.enable {
    services.nginx = {
      enable = true;
      virtualHosts = {
        "logos.ldlework.com" = {
          forceSSL = false;
          root = "/var/www/";
        };
      };
    };
  };
}
