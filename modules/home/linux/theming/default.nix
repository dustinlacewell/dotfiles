{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.theming;

in {
  options.theme = {
    enable = mkEnableOption "theming";
    cursor = mkOption { type = types.string; };
    fg = mkOption { type = types.string; };
    bg = mkOption { type = types.string; };
    black = mkOption { type = types.string; };
    dark-grey = mkOption { type = types.string; };
    grey = mkOption { type = types.string; };
    white = mkOption { type = types.string; };
    red = mkOption { type = types.string; };
    light-red = mkOption { type = types.string; };
    green = mkOption { type = types.string; };
    light-green = mkOption { type = types.string; };
    yellow = mkOption { type = types.string; };
    light-yellow = mkOption { type = types.string; };
    blue = mkOption { type = types.string; };
    light-blue = mkOption { type = types.string; };
    magenta = mkOption { type = types.string; };
    light-magenta = mkOption { type = types.string; };
    cyan = mkOption { type = types.string; };
    light-cyan = mkOption { type = types.string; };
  };

  config = mkIf config.theme.enable {
    # xresources.properties = {
      #   "*.cursorColor" = config.theme.cursor;
      #   "*.foreground" = config.theme.fg;
      #   "*.background" = config.theme.bg;
      #   "*.color0" = config.theme.black;
      #   "*.color8 " = config.theme.dark-grey;
      #   "*.color1" = config.theme.red;
      #   "*.color9 " = config.theme.light-red;
      #   "*.color2" = config.theme.green;
      #   "*.color10 " = config.theme.light-green;
      #   "*.color3" = config.theme.yellow;
      #   "*.color11 " = config.theme.light-yellow;
      #   "*.color4" = config.theme.blue;
      #   "*.color12 " = config.theme.light-blue;
      #   "*.color5" = config.theme.magenta;
      #   "*.color13 " = config.theme.light-magenta;
      #   "*.color6" = config.theme.cyan;
      #   "*.color14 " = config.theme.light-cyan;
      #   "*.color7" = config.theme.grey;
      #   "*.color15 " = config.theme.white;
      # };
  };
}

