{ config, pkgs, lib, ... }:

with lib;

{
  options.theme.beard.enable = mkEnableOption "beard theme";

  config = mkIf config.theme.beard.enable {
    theme.enable = true;
    theme.cursor = "#F6F3E8";
    theme.fg = "#daba8b";
    theme.bg = "#191716";
    theme.black = "#0f0e0d";
    theme.dark-grey = "#383332";
    theme.red = "#845336";
    theme.light-red = "#8c4f4a";
    theme.green = "#57553c";
    theme.light-green = "#898471";
    theme.yellow = "#a17e3e";
    theme.light-yellow = "#c8b491";
    theme.blue = "#43454f";
    theme.light-blue = "#65788f";
    theme.magenta = "#604848";
    theme.light-magenta = "#755e4a";
    theme.cyan = "#5c6652";
    theme.light-cyan = "#718062";
    theme.grey = "#a18b62";
    theme.white = "#bc9d66";
  };
}

