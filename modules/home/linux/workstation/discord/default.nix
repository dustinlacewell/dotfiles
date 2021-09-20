{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.discord;
  p3p = pkgs.python3Packages;
  deps = pkgs.callPackage (import ./deps.lib.nix)
  { python3Packages = p3p; };
  utils = import /nixcfg/util;
  discord = pkgs.discord.overrideAttrs(old: rec {
    version = "0.0.15";
    src = pkgs.fetchurl {
      url = "https://dl.discordapp.net/apps/linux/${version}/discord-${version}.tar.gz";
      sha256 = "0pn2qczim79hqk2limgh88fsn93sa8wvana74mpdk5n6x5afkvdd";
    };
  });

in {
  options.mine.workstation.discord.enable = mkEnableOption "workstation.discord";

  config = mkIf config.mine.workstation.discord.enable {
    home.packages = [ discord ];
  };
}

