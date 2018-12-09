{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.docker.enable = mkEnableOption "Docker";

  config = mkIf config.mine.docker.enable {
    virtualisation.docker = {
      enable = true;
      storageDriver = "overlay2";
    };
  };
}
