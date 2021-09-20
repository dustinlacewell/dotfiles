{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation.dunst;
  wrapperScript = pkgs.writeShellScriptBin "dunst-wrapper" cfg.wrapperScript;

in {
  options.mine.workstation.dunst = {
    enable = mkEnableOption "dunst";
    wrapperScript = mkOption {
      type = types.lines;
    };
  };

  config = mkIf config.mine.workstation.dunst.enable {
    home.packages = lib.optional (cfg.wrapperScript != "") wrapperScript;

    mine.workstation.qtile.startupCommands = ''
      ${wrapperScript}/bin/dunst-wrapper
    '';

    mine.workstation.wpgtk.loadScript = ''
      ${wrapperScript}/bin/dunst-wrapper
    '';

    mine.workstation.wpgtk.notifyScript = ''
        notify-send "NixOS:" "wptgk reloaded." -t 2000
    '';

    mine.workstation.dunst.wrapperScript = mkBefore ''
       DUNST=$(pidof dunst)
       if [ $DUNST ]
       then
         kill -9 $DUNST
       fi
       ${pkgs.dunst}/bin/dunst -c ~/.config/dunst/dunstrc &
    '';

    xdg.configFile = {
      "wpg/templates/dunstrc.base".text = (subbedString (builtins.readFile ./dunstrc) {
        iconsPath = "${pkgs.moka-icon-theme}/share/icons/Moka/24x24/status/";
      });
    };

    home.activation.dunst = symlink "~/.config/wpg/templates/dunstrc" "~/.config/dunst/dunstrc";
  };

}

