{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.rofi;
  deps = pkgs.callPackage (import ./deps.lib.nix) {};

in {
  options.mine.workstation.rofi.enable = mkEnableOption "rofi";

  config = mkIf cfg.enable {
    xdg.configFile = {
      "wal/templates/config.rasi".source = ./config.rasi;
    };

    home.activation.rofi =
      symlink "~/.cache/wal/config.rasi" "~/.config/rofi/config.rasi";

    home.packages = [
      pkgs.rofi
    ];
  };
}

