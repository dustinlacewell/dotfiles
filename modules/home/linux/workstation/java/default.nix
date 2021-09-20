{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation.java;
  gpuJava = (pkgs.writeScriptBin "gpuJava" ''
    #!${pkgs.stdenv.shell}
    gpu ${pkgs.openjdk11}/bin/java $@
  '');

in {
  options.mine.workstation.java.enable = mkEnableOption "java";

  config = mkIf cfg.enable {
    home.packages = [ gpuJava ];
  };
}
