{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.node;

  nodeEnv = with pkgs; callPackage ./node-env.lib.nix {
    inherit lib stdenv nodejs python2 pkgs libtool runCommand writeTextFile;
  };
  nxPkgs = with pkgs; callPackage ./nx.lib.nix {
    inherit nodeEnv fetchgit nix-gitignore lib;
  };

in {
  imports = [ ./overlay.lib.nix ];

  options.mine.workstation.node.enable = mkEnableOption "node";

  config = mkIf cfg.enable {
    home.packages = with pkgs; with pkgs.myNodePackages; [
      nodejs-14_x yarn nodePackages.pnpm

      myNodePackages.nx
      myNodePackages."@microsoft/rush"
      myNodePackages."@rushstack/heft"
    ];

  };
}

