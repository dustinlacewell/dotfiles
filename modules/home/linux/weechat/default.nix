{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.weechat;

in {
  options.mine.weechat.enable = mkEnableOption "weechat";
  options.mine.weechat.mutable-config = mkOption {
    type = types.string;
  };

  config = mkIf cfg.enable {
    home.packages = [ pkgs.weechat ];
    home.activation = mkIf (cfg.mutable-config != "") {
      weechat = symlink cfg.mutable-config "~/.weechat";
    };
  };
}

