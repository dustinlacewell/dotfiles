{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.mono;
  utils = import /nixcfg/util;

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

