{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation.wpgtk;
  loadScript = pkgs.writeShellScriptBin "wptgk-regen" cfg.loadScript;
  wpgtk = import ./package.lib.nix { inherit pkgs; };

in {
  options.mine.workstation.wpgtk = {
    enable = mkEnableOption "workstation.wpgtk";
    loadScript = mkOption { type = types.lines; default = ""; };
    wallpaperPath = mkOption {
      type = types.str;
      default = "~/www/wallpapers";
    };
  };

  config = mkIf cfg.enable {
    home.packages = [
      wpgtk
      pkgs.gnome3.dconf
      (pkgs.writeShellScriptBin "wpg-reload" "wpg -s $(wpg -c)")
      (pkgs.writeShellScriptBin "wpg-saturate" "wpg --sat $(wpg -c) 0.1 && wpg -s $(wpg -c)")
      (pkgs.writeShellScriptBin "wpg-desaturate" "wpg --sat $(wpg -c) -0.1 && wpg -s $(wpg -c)")
      (pkgs.writeShellScriptBin "wpg-brighten" "wpg --brt $(wpg -c) 2 && wpg -s $(wpg -c)")
      (pkgs.writeShellScriptBin "wpg-darken" "wpg --brt $(wpg -c) -2 && wpg -s $(wpg -c)")
      (pkgs.writeShellScriptBin "wpg-shuffle" "wpg -z $(wpg -c) && wpg -s $(wpg -c)")
      (pkgs.writeShellScriptBin "wpg-normalize" "wpg -A $(wpg -c) && wpg -s $(wpg -c)")
      (pkgs.writeShellScriptBin "wpg-reset" ''
        find ~/.config/wpg/schemes -type f -name "*$(basename -s .jpg $(wpg -c))*" -delete
        wpg -s $(wpg -c)
      '')

    ] ++ lib.optional (cfg.loadScript != "") loadScript;

    home.activation.wallpapers = (symlink
      "/nixcfg/modules/home/linux/workstation/wpgtk/wallpapers"
      "~/.config/wpg/wallpapers");
  };
}
