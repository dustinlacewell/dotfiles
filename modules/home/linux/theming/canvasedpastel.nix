{ config, pkgs, lib, ... }:

with lib;

{
  options.theme.canvasedpastel.enable = mkEnableOption "canvasedpastel theme";

  config = mkIf config.theme.canvasedpastel.enable {
    theme.enable = true;
    theme.cursor = "#F6F3E8";
    theme.fg = "#746c48";
    theme.bg = "#170f0d";
    theme.black = "#26251c";
    theme.dark-grey = "#999f91";
    theme.red = "#323027";
    theme.light-red = "#9b9773";
    theme.green = "#3d4339";
    theme.light-green = "#b2b08c";
    theme.yellow = "#443b2c";
    theme.light-yellow = "#c4bb8c";
    theme.blue = "#534d35";
    theme.light-blue = "#c4b67a";
    theme.magenta = "#646756";
    theme.light-magenta = "#cfc995";
    theme.cyan = "#7b8574";
    theme.light-cyan = "#d3d4b6";
    theme.grey = "#837b61";
    theme.white = "#d6d3ac";
  };
}

