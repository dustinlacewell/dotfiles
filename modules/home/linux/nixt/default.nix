{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.nixt;
in {
  options.mine.nixt.enable = mkEnableOption "nixt";

  config = mkIf cfg.enable {
    home.packages = [ pkgs.nixt ];
  };
}

