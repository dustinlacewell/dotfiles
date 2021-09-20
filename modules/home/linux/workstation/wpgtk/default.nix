{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation.wpgtk;
  wpgtk = import ./package.lib.nix { inherit pkgs; };

in {
  options.mine.workstation.wpgtk = {
    enable = mkEnableOption "workstation.wpgtk";
    loadScript = mkOption { type = types.lines; };
    notifyScript = mkOption { type = types.lines; };
    wallpaperPath = mkOption {
      type = types.str;
      default = "~/www/wallpapers";
    };
  };

  config = mkIf cfg.enable {
    home.packages = [
      pkgs.wpgtk
      pkgs.gnome3.dconf
      (pkgs.writeShellScriptBin "test" "wpg -s $(wpg -c)")
      (pkgs.writeShellScriptBin "wpg-reload" "wpg -s $(wpg -c)")
      (pkgs.writeShellScriptBin "wpg-saturate" "wpg --sat $(wpg -c) 0.1 && wpg-reload")
      (pkgs.writeShellScriptBin "wpg-desaturate" "wpg --sat $(wpg -c) -0.1 && wpg-reload")
      (pkgs.writeShellScriptBin "wpg-brighten" "wpg --brt $(wpg -c) 2 && wpg-reload")
      (pkgs.writeShellScriptBin "wpg-darken" "wpg --brt $(wpg -c) -2 && wpg-reload")
      (pkgs.writeShellScriptBin "wpg-shuffle" "wpg -z $(wpg -c) && wpg-reload")
      (pkgs.writeShellScriptBin "wpg-normalize" "wpg -A $(wpg -c) && wpg-reload")
      (pkgs.writeShellScriptBin "wpg-regen" ''
        wpg -m && wpg -A $(wpg -c) && wpg -s $(wpg -c)
        sleep .3
      '')
      (pkgs.writeShellScriptBin "wpg-reset" ''
        find ~/.config/wpg/schemes -type f -name "*$(basename -s .jpg $(wpg -c))*" -delete
        wpg-reload
      '')

    ];

    # xdg.configFile."wpg/wpg.conf".source = ./wpg.conf;
    xdg.configFile."wpg/templates/colors.json.base".source = ./templates/colors.json;
    xdg.configFile."wpg/templates/colors.py.base".source = ./templates/colors.py;

    home.activation.wallpapers = (symlink
      "/nixcfg/modules/home/linux/workstation/wpgtk/wallpapers"
      "~/.config/wpg/wallpapers");
  };
}
