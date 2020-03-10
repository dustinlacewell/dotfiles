{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.dotnet;
  utils = import /nixcfg/util;

  nixpkgs = utils.fetchNixpkgs {
    owner = "jdanekrh";
    rev    = "f86e296a1ac14ca50ff7e28ce2582f0ee4f285c3";
    sha256 = "0wn3iby14rk11g01ixbdkcn215jml9x6jqpfwfkzfj37ax85h8wj";
  };

  Nuget = nixpkgs.dotnetPackages.Nuget.overrideAttrs (old: rec {
    version = "4.9.1.5694";

    src = pkgs.fetchFromGitHub {
      owner = "mono";
      repo = "nuget-binary";
      rev = "7871fa26914593fdb2f2500df1196df7b8aecb1c";
      sha256 = "07r63xam6icm17pf6amh1qkmna13nxa3ncdan7a3ql307i5isriz";
    };

  });

  dotnet-wrapper = pkgs.writeScriptBin "dotnet-nix" ''
    #!${pkgs.stdenv.shell}
    export BaseFrameworkPathOverrideForMono=${nixpkgs.mono6}/lib/mono/
    ${nixpkgs.dotnet-sdk}/bin/dotnet $@
  '';

in {
  options.mine.dotnet.enable = mkEnableOption "dotnet";

  config = mkIf cfg.enable {
    home.packages = [ dotnet-wrapper nixpkgs.mono6 nixpkgs.dotnet-sdk ];
  };
}

