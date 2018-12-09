{ config, pkgs, ... }:

{
  networking = {
    firewall = {
      allowedTCPPorts = [ 22 80 8080 ];
      allowedUDPPorts = [ 22 80 8080 ];
    };
  };
}
