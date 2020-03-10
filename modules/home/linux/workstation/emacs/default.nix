{ config, pkgs, lib, ... }:

with lib;
with import <home-manager/modules/lib/dag.nix> { inherit lib; };
with import /nixcfg/util;

let
  cfg = config.mine.workstation.emacs;

  pymacs = pkgs.python3Packages.buildPythonPackage rec {
    version = "dev";
    name = "pymacs-${version}";

    src = pkgs.fetchFromGitHub {
      owner = "dgentry";
      repo = "Pymacs";
      rev = "56acc1a0bab6e1807995f032620158ee5d647898";
      sha256 = "0ykqrkm395w1q1q7dmyyqy79vyvmzv187a58af6ykifqb56shgh5";
    };

    configurePhase = "make && ls -la && mkdir $out && cp pymacs.el $out && ls -la $out";

    doCheck = false;
  };

  pythonPackage = pkgs.python3.withPackages (ps: [
    ps.elpy
    ps.autopep8
    ps.importmagic
    ps.rope
    ps.setuptools
    ps.jedi
    ps.flake8
    ps.virtualenv
    ps.pyqt5
    pymacs
  ]);

  emacsPackage = pkgs.emacsWithPackages (es: [ pythonPackage pkgs.ag ]);

  wrapper = pkgs.stdenv.mkDerivation {
    name = "emacs-wrapper";
    src = ./.;
    buildInputs = [ pkgs.makeWrapper ];
    phases = ["buildPhase"];
    buildPhase = ''
      makeWrapper ${emacsPackage}/bin/emacs $out/bin/emacs \
      --set PYTHONPATH "${pkgs.leo-editor}/share/leo-editor:${pkgs.leo-editor}/share/leo-editor/leo/core/" \
    '';
  };

in {
  options.mine.workstation.emacs = {
    enable = mkEnableOption "emacs";
  };

  config = mkIf cfg.enable {
    home.packages = [ wrapper ];
    home.activation.emacs = symlink "/nixcfg/unmanaged/emacs/init.el" "~/.emacs.d/init.el";
    home.activation.pyemacs = symlink "${pymacs}/pymacs.el" "~/.emacs.d/pymacs.el";
    home.activation.emacs-theme = symlink "~/.config/wpg/formats/theme.el" "~/.emacs.d/theme.el";
    xdg.configFile."wal/templates/theme.el".source = ./theme.el;
  };
}
