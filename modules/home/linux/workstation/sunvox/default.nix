{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.sunvox;
  libPath = pkgs.stdenv.lib.makeLibraryPath [
    pkgs.stdenv.cc.cc
    pkgs.alsaLib
    pkgs.xorg.libX11
    pkgs.xorg.libXi
    pkgs.SDL2
    pkgs.jack2
  ];
  arch =
    if pkgs.stdenv.isAarch64
    then "arm64"
    else if pkgs.stdenv.isAarch32
    then "arm_armhf_raspberry_pi"
    else if pkgs.stdenv.is64bit
    then "x86_64"
    else "x86";

    sunvox = pkgs.stdenv.mkDerivation rec {
      pname = "SunVox";
      version = "1.9.5d";

      src = pkgs.fetchurl {
        url = "http://www.warmplace.ru/soft/sunvox/sunvox-${version}.zip";
        sha256 = "04f7psm0lvc09nw7d2wp0sncf37bym2v7hhxp4v8c8gdgayj7k8m";

      };

      buildInputs = [ pkgs.unzip ];

      unpackPhase = "unzip $src";

      dontBuild = true;

      installPhase = ''
        mkdir -p $out/share $out/bin
        mv sunvox $out/share/
        bin="$out/share/sunvox/sunvox/linux_${arch}/sunvox"
        patchelf --set-interpreter "$(cat $NIX_CC/nix-support/dynamic-linker)" \
        --set-rpath "${libPath}" \
        "$bin"
        patchelf --add-needed libjack.so.0 "$bin"
        ln -s "$bin" $out/bin/sunvox
      '';
    };

in {
  options.mine.workstation.sunvox.enable = mkEnableOption "workstation.sunvox";

  config = mkIf cfg.enable {
    home.packages = [ sunvox ];
  };
}
