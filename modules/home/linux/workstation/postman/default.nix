{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.postman;
  nixpkgs = fetchNixpkgs {
    rev    = "dd47ef70ff0b094a1850a1f42e6c3f2a107f6f46";
    sha256 = "191pl7z0ms2q075dwd18731dphqhwbpr942xcqscss7zjpnnlhgj";
  };

in {
  options.mine.workstation.postman.enable = mkEnableOption "workstation.postman";

  config = mkIf cfg.enable {
    home.packages = [
      nixpkgs.postman
    ];
  };
}

