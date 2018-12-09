{ config, pkgs, lib, ... }:

with lib;

{
  config = mkIf config.mine.zsh.enable {
    programs.zsh.shellAliases = {
      # exa is modern ls
      ls = "exa";
      t = "exa --tree -L 2";

      # tig is curses for git
      ts = ''tig status'';

      # i like j better than z
      j = ''z'';

      # auto create parent directories
      mkdir = ''mkdir -pv'';

      # docker aliases
      dps = ''docker ps'';
      drm = ''docker rm -f $(docker ps -aq)'';
      drmi = ''docker rmi $(docker images | grep "<none>" | awk "{print $3}")'';
    };
  };
}
