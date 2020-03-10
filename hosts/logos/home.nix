{ config, pkgs, lib, ... }:

with import /nixcfg/util;

{
  imports = [ ../../modules/home/linux ];

  config = {
    nixpkgs.config.allowUnfree = true;
    mine = {
      enable = true;
      weechat.mutable-config = "/nixcfg/external/weechat/";
      # key codes are machine specific
      workstation.xmodmap = builtins.readFile ./Xmodmap;
    };
  };
}
