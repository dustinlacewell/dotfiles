{ config, pkgs, lib, ...}:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation."browser-sync";
  nodeEnv = (import ./node-env.lib.nix) {
    nodejs = pkgs."nodejs-10_x";
    libtool = if pkgs.stdenv.isDarwin then pkgs.darwin.cctools else null;
    inherit (pkgs) stdenv python2 utillinux runCommand writeTextFile;
  };
  npkgs = (import ./node-packages.lib.nix) {
    inherit (pkgs) fetchurl fetchgit;
    inherit nodeEnv;
  };
in {
  options.mine.workstation."browser-sync" = {
    enable = mkEnableOption "browser-sync";
  };

  config = mkIf cfg.enable {
    home.packages = [ npkgs."browser-sync" ];
  };
}
