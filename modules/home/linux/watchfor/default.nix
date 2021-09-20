{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  watchfor = writeSubbedBin {
    name = "watchfor";
    src = ./watchfor;
  };

in {
  options.mine.watchfor.enable = mkEnableOption "watchfor";

  config = mkIf config.mine.watchfor.enable {
    home.packages = [ watchfor ];
  };
}
