{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.touchpad = mkEnableOption "Libinput Touchpad";

  config = mkIf config.mine.touchpad {
    services.xserver.libinput = {
      enable = true;
      tapping = true;
      disableWhileTyping = true;
      scrollMethod = "twofinger";
      naturalScrolling = true;
    };
  };
}
