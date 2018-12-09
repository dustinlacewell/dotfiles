{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.discord;
  p3p = pkgs.unstable.python3Packages;
  deps = pkgs.unstable.callPackage (import ./deps.lib.nix)
    { python3Packages = p3p; };

in {
  options.mine.workstation.discord.enable = mkEnableOption "workstation.discord";

  config = mkIf config.mine.workstation.discord.enable {
    home.packages = [
      pkgs.discord
      deps.beautifuldiscord
      deps.wal-discord];

    mine.workstation.pywal.loadScript = ''
      ${deps.wal-discord}/bin/wal-discord
    '';
  };
}

