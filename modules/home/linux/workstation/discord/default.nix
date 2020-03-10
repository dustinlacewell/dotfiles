{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.discord;
  p3p = pkgs.python3Packages;
  deps = pkgs.callPackage (import ./deps.lib.nix)
    { python3Packages = p3p; };
  utils = import /nixcfg/util;
  nixpkgs = utils.fetchNixpkgs {
    rev    = "da5e340f74b1bdc0e0283f468b7cf8c027cc1a9d";
    sha256 = "1lvnyxv9sqdchjkbvd5sfyi6fhycxjn6ia0q8lha8p8n32f5il2l";
  };

in {
  options.mine.workstation.discord.enable = mkEnableOption "workstation.discord";

  config = mkIf config.mine.workstation.discord.enable {
    home.packages = [
      nixpkgs.discord
      deps.beautifuldiscord
      deps.wal-discord];

    mine.workstation.pywal.loadScript = ''
      ${deps.wal-discord}/bin/wal-discord
    '';

    home.activation.wal-discord = (symlink
      "~/.config/wpg/formats/colors.scss"
      "~/.config/wal-discord/colors.scss");
  };
}

