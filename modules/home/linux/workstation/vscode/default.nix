{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.vscode;

in {
  options.mine.workstation.vscode = {
    enable = mkEnableOption "vscode";
  };

  config = mkIf cfg.enable {
    home.packages = [ pkgs.vscode ];
  };
}
