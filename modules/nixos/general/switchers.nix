{ config, pkgs, lib, ... }:

with lib;

let
  hostname = config.networking.hostName;

in {

  environment.systemPackages = [
    # easy switch helper
    (pkgs.writeScriptBin "switch" ''
      sudo nixos-rebuild switch $@
    '')

    # home-manager and switch helper
    (pkgs.writeScriptBin "hm-switch" ''
      ${pkgs.home-manager}/bin/home-manager -I home-manager=${pkgs.home-manager} -v -f /nixcfg/hosts/${hostname}/home.nix switch
      code=$?
      exit $code
    '')
  ];
}
