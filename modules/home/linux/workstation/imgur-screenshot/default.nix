{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.imgur-screenshot;
  secrets = import /nixcfg/external/private;
in {
  options.mine.workstation.imgur-screenshot.enable =
    mkEnableOption "imgur-screenshot";

  config = mkIf cfg.enable {
    home.packages = [ pkgs.imgur-screenshot ];
    xdg.configFile."imgur-screenshot/settings.conf".text = ''
      imgur_acct_key="${secrets.imgur-acct-key}"
      imgur_secret="${secrets.imgur-secret}"
      login="true"
      file_dir="$HOME/www/caps/"
    '';
  };
}

