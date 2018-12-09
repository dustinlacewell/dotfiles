{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.golang.enable = mkEnableOption "golang";

  config = mkIf config.mine.golang.enable {
    home.packages = [
      pkgs.go
    ];
  };
}
