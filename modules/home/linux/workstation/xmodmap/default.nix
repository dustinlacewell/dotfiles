{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.xmodmap;
  modmap-config = pkgs.writeTextFile {
    name = "Xmodmap";
    text = cfg;
  };

in {
  options.mine.workstation.xmodmap = mkOption {
    type = types.string;
  };

  config = mkIf (cfg != "") {
    mine.workstation.qtile.startupCommands = ''
      ${pkgs.xlibs.xmodmap}/bin/xmodmap ${modmap-config}
    '';
  };
}

