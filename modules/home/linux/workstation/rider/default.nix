{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.rider;
  utils = import /nixcfg/util;
  nixpkgs = utils.fetchNixpkgs {
    rev    = "448de5d5fc3c08595bbf29294e99709213310ed6";
    sha256 = "1n3dgb8hxjhr1i52v094pdjk0n9jkc21kvx5zhjkcxv4kik3kmaj";
  };

  rider = nixpkgs.jetbrains.rider.overrideDerivation (old: rec {
    name = "rider-${version}";
    version = "2019.2"; /* updated by script */
    src = pkgs.fetchurl {
      url = "https://download.jetbrains.com/rider/JetBrains.Rider-2019.2.1.tar.gz";
      sha256 = "1p0mlch7qvkvgxjscx6rl65v6h8g6fwk8rcb8s27qkcjm0d78ic8";
    };
  });

in {
  options.mine.workstation.rider.enable = mkEnableOption "rider";

  config = mkIf cfg.enable {
    home.packages = [
      rider
      (writeSubbedBin  {
        name = "reset-rider";
        src = ./reset-rider;
        version = "2019.1.2";
      })
    ];
  };
}

