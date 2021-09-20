{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.rofi;

  applets = pkgs.stdenv.mkDerivation {
    name = "rofi-applets";

    src = pkgs.fetchFromGitHub {
      owner = "adi1090x";
      repo = "rofi";
      rev = "6e84e0566c5820a7ba74abd8ce86aa744b556417";
      sha256 = "1lgs5s2a2fw1w7qdkbyxsw414iskc7mmmxa17nb7nqq7h1vzzwy3";
    };

    phases = [ "unpackPhase" "installPhase" ];

    preferLocalBuild = true;
    allowSubstitutes = false;

    installPhase = ''
      mkdir -p $out/bin/
      mkdir -p $out/share/rofi/
      chmod +x scripts/*
      for f in scripts/*
      do
      cp -- "$f" "$out/bin/rofi-$(basename $f .sh).sh"
      done
      patchShebangs $out
      cp -r bin themes $out/share/rofi/
    '';
  };

in {
  options.mine.workstation.rofi.enable = mkEnableOption "rofi";

  config = mkIf cfg.enable {
    xdg.configFile = {
      "wpg/templates/config.rasi.base".source = ./config.rasi;
    };

    home.activation.rofi = symlink
    "~/.config/wpg/templates/config.rasi"
    "~/.config/rofi/config.rasi";

    home.activation.rofi2 = symlink
    "${pkgs.papirus-icon-theme}/share/icons/Papirus/"
    "~/.local/share/icons/Papirus";

    home.activation.rofi-applet-bin = symlink "${applets}/share/rofi/bin/" "~/.config/rofi/bin";
    home.activation.rofi-applet-themes = symlink "${applets}/share/rofi/themes/" "~/.config/rofi/themes";

    home.packages = [ pkgs.rofi applets pkgs.comfortaa];
  };
}

