{ config, pkgs, lib, ... }:

with lib;

let
  summon-cmd = pkgs.buildGoPackage rec {
    name = "summon-${version}";
    version = "master";
    src = pkgs.fetchFromGitHub {
      owner = "cyberark";
      repo = "summon";
      rev = "8687c607e92d8df1206adef099db92dc1d84325c";
      sha256 = "16vv04gsvii16gz1q0bzihl5p15vvp5fn2rbc2wylqr2vxqcnk9i";
    };
    goDeps = ./deps.lib.nix;
    goPackagePath = "github.com/cyberark/summon";
  };

  summon = pkgs.writeScriptBin "summon" "${summon-cmd}/bin/cmd $@";

in {
  options.mine.summon.enable = mkEnableOption "summon";

  config = mkIf config.mine.summon.enable {
    home.packages = [ summon ];
  };
}

