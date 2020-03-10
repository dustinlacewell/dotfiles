{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.workstation.fonts.enable = mkEnableOption "workstation.fonts";
  config = mkIf config.mine.workstation.fonts.enable {
    fonts = {
      enableFontDir = true;
      enableGhostscriptFonts = true;
      fonts = with pkgs; [
        powerline-fonts
        source-code-pro
        noto-fonts
        noto-fonts-emoji
        noto-fonts-extra
        symbola
      ];
    };
  };
}

