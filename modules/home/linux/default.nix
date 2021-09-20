{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

with { cfg = config.mine; };

{
  imports = recImport ./.;

  #           ++ [
  #   # /home/ldlework/src/baduk.nix
  #   /home/ldlework/src/ipfs
  # ];

  options.mine.enable = mkEnableOption "default packages";

  config = {
    # baduk.sabaki.enable = true;
    # baduk.katago.enable = true;
    # baduk.gnugo.enable = true;
    # baduk.leela-zero.enable = true;

    nixpkgs.config.allowUnfree = true;

    services.lorri.enable = true;
    programs.direnv.enable = true;

    home.packages = mkIf cfg.enable (with pkgs; [
      ffmpeg_4
      gnupg
      pinentry
      # pkgs.nixt
      aspell
      ripgrep
      wineFull
      nixops
    ]);

    mine = mkIf cfg.enable (enableMultiple [
      "workstation"
      "appimage"
      # "aws-cli"
      # "dotnet"
      "git"
      "golang"
      "httpie"
      # "mycli"
      "ranger"
      # "qtsixa"
      # "nixt"
      "ssh"
      "tig"
      "watchfor"
      "weechat"
      # "summon"
      # "terraform"
      "zsh"
    ]);
  };
}
