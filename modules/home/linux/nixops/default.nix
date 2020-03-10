

{ config, pkgs, lib, ... }:

with lib;

# let
  #   # nixops = (pkgs.nixops.overrideAttrs (oldAttrs: rec {
    #   #   name = "my-nixops";

    #   # }));

  # in
 {
   options.mine.nixops.enable = mkEnableOption "nixops";
   config = mkIf config.mine.nixops.enable {  };
 }

