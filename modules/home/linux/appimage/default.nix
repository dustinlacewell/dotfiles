{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.appimage;
  utils = import /nixcfg/util;

in {
  options.mine.appimage.enable = mkEnableOption "appimage";

  config = mkIf config.mine.appimage.enable {
    home.packages = [
      pkgs.appimage-run
    ];
  };
}

