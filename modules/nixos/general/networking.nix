{ config, pkgs, ... }:

{
  networking = {
    firewall = {
      enable = true;
      allowedTCPPorts = [ 22 80 8080 ];
      allowedUDPPorts = [ 22 80 8080 ];
    };
  };
}
