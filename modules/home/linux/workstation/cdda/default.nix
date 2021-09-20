{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.cdda;
  utils = import /nixcfg/util;

  cata = pkgs.cataclysm-dda-git.overrideAttrs(old: rec {
    version = "7f7deed9372da80f2f169e65ebb7a636a5fea0be";
    name = "cataclysm-dda-git-${version}";

    src = pkgs.fetchFromGitHub {
      owner = "CleverRaven";
      repo = "Cataclysm-DDA";
      rev = "1973bd1ad3b4fdd9c620235a218079e506d3c57f";
      sha256 = "1hlfs2nq058rk6k98zmnin708xf2bpp4gl7ydsca78lwmpy5nn95";
    };

    patches = [];

  });

in {
  options.mine.workstation.cdda.enable = mkEnableOption "cdda";

  config = mkIf cfg.enable {
    home.packages = [ cata ];
  };
}

