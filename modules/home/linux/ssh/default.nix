{ config, pkgs, lib, ... }:

with lib;
with import <home-manager/modules/lib/dag.nix> { inherit lib; };
with import /nixcfg/util;

{
  options.mine.ssh.enable = mkEnableOption "ssh";

  config = mkIf config.mine.ssh.enable {
    programs.ssh = {
      enable = true;
      controlPath = "none";
      matchBlocks = {
        # "work.github.com" = {
          #   hostname = "github.com";
          #   user = "git";
          #   identityFile = "~/.ssh/work";
          # };
      };
    };
    home.activation.ssh_private = symlink "/nixcfg/external/private/ssh_private" "~/.ssh/id_rsa";
    home.activation.ssh_public = symlink "/nixcfg/external/private/ssh_public" "~/.ssh/id_rsa.pub";
  };
}
