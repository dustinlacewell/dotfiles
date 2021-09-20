{ config, pkgs, ... }:

with pkgs;

let
  sddm-sugar-light = stdenv.mkDerivation {
    name = "sddm-sugar-light";
    src = fetchFromGitHub {
      owner = "MarianArlt";
      repo = "sddm-sugar-light";
      sha256 = "1xymi0xnwskgq0ddpm0vbxk4nwc4azdz5hq3nmkpd8p24js5kmr9";
      rev = "19bac00e7bd99e0388d289bdde41bf6644b88772";

    };
    buildInputs = [ sddm qt5.qtquickcontrols ];
    propagatedBuildInputs = [ qt5.qtquickcontrols ];

    installPhase = ''
      mkdir -p "$out/share/sddm/themes/sugar-light"
      cp -r * "$out/share/sddm/themes/sugar-light"
    '';
  };
in {
  environment.systemPackages = [ /* sddm-sugar-light */ ];
}
