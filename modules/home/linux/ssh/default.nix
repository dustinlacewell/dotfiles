{ config, pkgs, lib, ... }:

with lib;

let
  dag = config.lib.dag;
  secrets = import /nixcfg/external/private;

in {
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
    home.file.".ssh/id_rsa".text = secrets.ssh-private;
    home.file.".ssh/id_rsa.pub".text = secrets.ssh-public;
  };
}
