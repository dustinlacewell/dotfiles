{ config, pkgs, lib, ... }:

with lib;

let
  deps = pkgs.callPackage (import ./deps.lib.nix) {};

in {
  options.mine.git.enable = mkEnableOption "git";

  config = mkIf config.mine.git.enable {
    home.packages = [ pkgs.git deps.git-spindle ];
    programs.zsh.oh-my-zsh.plugins = [ "git" ];
  };
}
