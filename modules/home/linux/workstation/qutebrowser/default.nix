
{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

with import <home-manager/modules/lib/dag.nix> { inherit lib; };

let
  cfg = config.mine.workstation.qutebrowser;
  p3p = pkgs.python3Packages;
  deps = pkgs.callPackage (import ./deps.lib.nix) { };

  python = p3p.python.withPackages (ps: qutebrowser.propagatedBuildInputs);
  pythonpath = "${python}/bin:$PATH";
  userscripts-path = "share/qutebrowser/userscripts";

  qutebrowser = pkgs.qutebrowser.overrideAttrs (old: rec {
    name = "myqutebrowser";
    preFixup = ''
      PATH="${pythonpath}" patchShebangs $out/${userscripts-path}
    '';
  });

in {
  options.mine.workstation.qutebrowser.enable = mkEnableOption "workstation.qutebrowser";

  config = mkIf cfg.enable {
    home.packages = [ qutebrowser ];
    home.activation.qutebrowser = dagEntryAfter ["installPackages"] ''
      xdg-mime default qutebrowser.desktop x-scheme-handler/http
      xdg-mime default qutebrowser.desktop x-scheme-handler/https
      xdg-mime default qutebrowser.desktop x-scheme-handler/about
      xdg-mime default qutebrowser.desktop x-scheme-handler/unknown
    '';

    xdg.configFile = {
      "qutebrowser/config.py".source = ./config/config.py;
      "qutebrowser/theme.py".source = ./config/theme.py;
      "qutebrowser/keys.py".source = ./config/keys.py;
    };

    xdg.dataFile = {
      "applications/qutebrowser.desktop".source = ./qutebrowser.desktop;
      "qutebrowser/greasemonkey".source = ./greasemonkey;
      "qutebrowser/userscripts".source = "${qutebrowser}/share/qutebrowser/userscripts/";
    };

    mine.workstation.wpgtk.loadScript = subbedString ''
      @procps@/bin/pgrep -lf qutebrowser
      if [ $? -eq 0 ]; then
      @qutebrowser@/bin/qutebrowser ":config-source /nixcfg/modules/home/linux/workstation/qutebrowser/config/theme.py" &
      fi
    '' { qutebrowser = "${qutebrowser}"; procps = "${pkgs.procps}"; };
  };
}


