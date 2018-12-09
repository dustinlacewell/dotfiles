{ config, pkgs, lib, ... }:

{
  programs.amethyst = {
    enable = true;
    initFile = ./amethyst;
  };
}
