{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

with { cfg = config.mine; };

{
  imports = recImport ./. ++ [ /nixcfg/overlays ];

  options.mine.enable = mkEnableOption "default packages";

  config = {
    nixpkgs.config.allowUnfree = true;

    home.packages = mkIf cfg.enable (with pkgs; [
      calibre
      chromium
      ffmpeg_4
      gnupg
      pinentry
    ]);

    mine = mkIf cfg.enable (enableMultiple [
      "workstation"
      "aws-cli"
      "dotnet"
      "git"
      "golang"
      "httpie"
      "mycli"
      "ranger"
      "ssh"
      "tig"
      "weechat"
      "summon"
      "terraform"
      "zsh"
    ]);
  };
}
