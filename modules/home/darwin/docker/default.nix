{ config, pkgs, lib, ... }:

{
  programs.docker = {
    enable = true;
  };
}
