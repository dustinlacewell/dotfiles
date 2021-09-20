{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.chrome;

  # chrome = pkgs.writeShellScriptBin "chrome" ''
  #     gpu ${pkgs.google-chrome}/bin/google-chrome-stable $@
  # '';

  # chrome-dev = pkgs.writeShellScriptBin "chrome-dev" ''
  #     gpu ${pkgs.google-chrome-dev}/bin/google-chrome-unstable $@
  # '';

in {
  options.mine.workstation.chrome.enable = mkEnableOption "chrome";

  config = mkIf cfg.enable {
    home.packages = with pkgs; [ google-chrome google-chrome-dev ];
  };
}

