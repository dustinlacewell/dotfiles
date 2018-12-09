{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.recap;

  recap = import (pkgs.fetchFromGitHub {
    owner = "dustinlacewell";
    repo = "recap";
    rev = "4d441ab94c868be9a2a48f28430c56e4ce991e3d";
    sha256 = "0z6085k4jv8pxivr1rsgzg953lpr38xrwm9lvj30c3zrn7m9jz6j";
  });

  # recap = import /home/ldlework/src/recap;

in {
  options.mine.workstation.recap.enable = mkEnableOption "recap";

  config = mkIf cfg.enable {
    home.packages = [ recap ];
  };
}

