{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.aws-cli.enable = mkEnableOption "aws-cli";

  config = mkIf config.mine.aws-cli.enable {
    home.packages = [ pkgs.awscli pkgs.awless ];
    programs.zsh.oh-my-zsh.plugins = [ "aws" ];
  };
}
