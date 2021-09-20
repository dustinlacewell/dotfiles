{ pkgs, lib }:

let
  version = "1.9.1";

in pkgs.appimageTools.wrapType2 rec {
  name = "lepton-${version}";
  src = pkgs.fetchurl {
    url = "https://github.com/hackjutsu/Lepton/releases/download/v${version}/Lepton-${version}.AppImage";
    sha256 = "1aj44rvv2pmz8win3phwp57759jnls0hw9wzy19f4a9ykiqqv68n";
  };
  multiPkgs = null; # no 32bit needed
  extraPkgs = pkgs.appimageTools.defaultFhsEnvArgs.multiPkgs;
  extraInstallCommands = "mv $out/bin/{${name},lepton}";
  profile = ''
    export LC_ALL=C.UTF-8
    export XDG_DATA_DIRS=${pkgs.gsettings-desktop-schemas}/share/gsettings-schemas/${pkgs.gsettings-desktop-schemas.name}:${pkgs.gtk3}/share/gsettings-schemas/${pkgs.gtk3.name}:$XDG_DATA_DIRS
  '';
}
