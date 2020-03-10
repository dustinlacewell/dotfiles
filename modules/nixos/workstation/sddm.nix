{ config, pkgs, ... }:

with pkgs;

let
  sddm-sugar-light = stdenv.mkDerivation {
    name = "sddm-sugar-light";
    src = fetchFromGitHub {
      owner = "MarianArlt";
      repo = "sddm-sugar-light";
      sha256 = "0s91pjg0z55sq53vw0wjbcl7zp1axvhcjnc4pqk1gmlrhr933l65";
      rev = "8537bc6";

    };
    buildInputs = [ sddm qt5.qtquickcontrols ];
    propagatedBuildInputs = [ qt5.qtquickcontrols ];

    installPhase = ''
      mkdir -p "$out/share/sddm/themes/sugar-light"
      cp -r * "$out/share/sddm/themes/sugar-light"
    '';
  };
in {
  environment.systemPackages = [ sddm-sugar-light ];
}
