{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.workstation.rpcs3;

  extPkgs = import (pkgs.fetchFromGitHub {
    owner = "petabyteboy";
    repo = "nixpkgs";
    rev = "7dc83d87270e2816bfad33d2254ca223c08e1e83";
    sha256 = "0hhjd6v8fcryvnn7bbpvcil22crgh9ks0bckkdg3al981hfbr6im";
  }) { };

  rpcs3 = extPkgs.rpcs3.overrideAttrs (old: {
    nativeBuildInputs = old.nativeBuildInputs ++ [ extPkgs.qt5.wrapQtAppsHook ];
    makeWrapperArgs = [ "\${qtWrapperArgs[@]}" ];
    buildInputs = old.buildInputs ++ [ extPkgs.llvm ];

    preConfigure = ''
      cat > ./rpcs3/git-version.h <<EOF
      #define RPCS3_GIT_VERSION "e485c9c79c0fd402858e3b688f2ac667cc49616c"
      #define RPCS3_GIT_BRANCH "HEAD"
      #define RPCS3_GIT_VERSION_NO_UPDATE 1
      #define RPCS3_GIT_FULL_BRANCH "local_build"
      EOF
    '';

    src = /home/ldlework/ext/rpcs3;
  });

in {
  options.mine.workstation.rpcs3.enable = mkEnableOption "rpcs3";

  config = mkIf cfg.enable { home.packages = [ rpcs3 ]; };
}
