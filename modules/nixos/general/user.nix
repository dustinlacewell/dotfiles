{ config, pkgs, ... }:

{
  users.users.ldlework = {
    isNormalUser = true;
    createHome = true;
    uid = 1000;
    extraGroups = [ "wheel" "networkmanager" "docker" "sound" ];
    shell = pkgs.zsh;
    initialPassword = "password";
  };
}
