{ config, pkgs, lib, ... }:

with lib;

{
  options.theme.badger.enable = mkEnableOption "badger theme";

  config = mkIf config.theme.badger.enable {
    theme.enable = true;
    theme.cursor = "#F6F3E8";
    theme.fg = "#F6F3E8";
    theme.bg = "#171717";
    theme.black = "#282a2e";
    theme.dark-grey = "#373b41";
    theme.red = "#a54242";
    theme.light-red = "#cc6666";
    theme.green = "#86b187";
    theme.light-green = "#b5bd68";
    theme.yellow = "#de935f";
    theme.light-yellow = "#f0c674";
    theme.blue = "#8AC6F2";
    theme.light-blue = "#81a2be";
    theme.magenta = "#85678f";
    theme.light-magenta = "#b294bb";
    theme.cyan = "#5e8d87";
    theme.light-cyan = "#8abeb7";
    theme.grey = "#707880";
    theme.white = "#c5c8c6";
  };
}

