{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.pywal;
  loadScript = pkgs.writeShellScriptBin "wal-regen" cfg.loadScript;

in {
  options.mine.workstation.pywal = {
    enable = mkEnableOption "workstation.pywal";
    loadScript = mkOption { type = types.lines; };
    wallpaperPath = mkOption {
      type = types.str;
      default = "~/www/wallpapers";
    };
  };

  config = mkIf cfg.enable {
    mine.workstation.pywal.loadScript = mkBefore ''
      ${pkgs.unstable.pywal}/bin/wal -i ${cfg.wallpaperPath}
    '';
    xdg.configFile."wal/templates/colors.json".source = ./colors.json;
    xdg.configFile."wal/templates/colors.py".source = ./colors.py;
    home.packages = [
      pkgs.unstable.pywal
      pkgs.unstable.neofetch
    ] ++ lib.optional (cfg.loadScript != "") loadScript;
  };
}

