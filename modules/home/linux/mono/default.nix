{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.mono;
  utils = import /nixcfg/util;
  nixpkgs = utils.fetchNixpkgs {
    rev    = "ffc8ac2fad393182211f64ea8d9186ea9fe5b2ea";
    sha256 = "09d1p6y74f5krqdm2f80x6g1gb6c6d4bdrljkyyi4m4kqarcjk02";
  };

in {
  options.mine.mono.enable = mkEnableOption "mono";

  # config = mkIf config.mine.mono.enable {
    #   home.packages = [
      #     nixpkgs.mono
      #     nixpkgs.dotnet-sdk
      #     nixpkgs.omnisharp-roslyn
      #   ];
    # };
}

