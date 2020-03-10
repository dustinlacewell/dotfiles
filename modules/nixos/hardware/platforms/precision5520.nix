{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.precision5520 = mkEnableOption "Precission5520";

  config = mkIf config.mine.precision5520 {

    mine.efi = true;
    mine.nvidia = true;
    mine.touchpad = true;
    mine.bluetooth = true;
    sound.enable = true;

  };
}
