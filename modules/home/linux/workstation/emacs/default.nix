{ config, pkgs, lib, ... }:

with lib;
with import <home-manager/modules/lib/dag.nix> { inherit lib; };
with import /nixcfg/util;

let
  cfg = config.mine.workstation.emacs;

  pythonPackage = pkgs.python27.withPackages (ps: [
    ps.elpy
    ps.autopep8
    ps.importmagic
    ps.rope
    ps.setuptools
    ps.jedi
    ps.flake8
    ps.virtualenv
  ]);

  emacsPackage = pkgs.emacsWithPackages (es: [ pythonPackage ]);

in {
  options.mine.workstation.emacs = {
    enable = mkEnableOption "emacs";
  };

  config = mkIf cfg.enable {
    home.packages = [ emacsPackage ];
    home.file."emacs.txt".text = "${emacsPackage}";
    home.file."python.txt".text = "${pythonPackage}";
    home.activation.emacs = symlink "/nixcfg/unmanaged/emacs/init.el" "~/.emacs.d/init.el";
    home.activation.emacs-theme = symlink "~/.cache/wal/theme.el" "~/.emacs.d/theme.el";
    xdg.configFile."wal/templates/theme.el".source = ./theme.el;
  };
}
