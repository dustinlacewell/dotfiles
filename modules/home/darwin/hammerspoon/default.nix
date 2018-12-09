{ config, pkgs, lib, ... }: {
  programs.hammerspoon = {
    enable = true;
    initFile = ./init.lua;
  };
}
