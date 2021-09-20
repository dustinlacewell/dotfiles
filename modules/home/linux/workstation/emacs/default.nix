{ config, pkgs, lib, ... }:

with lib;
with import <home-manager/modules/lib/dag.nix> { inherit lib; };
with import /nixcfg/util;

let
  nixpkgs = import <nixpkgs> { overlays = [ emacsOverlay ];};
  cfg = config.mine.workstation.emacs;
  emacsOverlay = import (pkgs.fetchFromGitHub {
    owner = "nix-community";
    repo = "emacs-overlay";
    rev = "c1601895499d2fe2d036ce9c4bd5501558f671e8";
    sha256 = "1gg7wp0815vmbg2kn7l3bcbdkky58k0vy6bsffsy0cngwh2f95a0";
  });

in {
  options.mine.workstation.emacs = { enable = mkEnableOption "emacs"; };

  config = mkIf cfg.enable {
    home.packages = [ nixpkgs.emacs nixpkgs.shellcheck ];
    # xdg.configFile."wpg/templates/theme.el.base".source = ./theme.el;
    home.activation.emacs = symlink "/nixcfg/unmanaged/emacs/init.el" "~/.emacs.d/init.el";
    home.activation.emacs-theme = symlink "/nixcfg/unmanaged/emacs/theme.el" "~/.config/wpg/templates/theme.el.base";
  };
}
