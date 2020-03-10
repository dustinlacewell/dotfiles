{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.nginx.enable = mkEnableOption "nginx";

  config = mkIf config.mine.nginx.enable {
    services.nginx = {
      enable = true;
      virtualHosts = {
        "localhost" = {
          serverName = "logos.ldlework.com";
          forceSSL = false;
          root = "/var/www/";
          # locations = {
            #   "/" = {
              #     proxyPass = "http://localhost:8000/";
              #   };
            # };
        };
      };
    };
  };
}
