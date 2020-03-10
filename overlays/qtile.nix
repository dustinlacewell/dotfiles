self: super: with super;

let
  utils = import /nixcfg/util;
  nixpkgs = utils.fetchNixpkgs {
    owner = "avnik";
    rev    = "b05f12a76e8f4ab98d23915a179de57996d12ae7";
    sha256 = "1mm0mb83dxb92lhggr36nxqx9ml8y33xwpmzgbzq89n8inijacsp";
  };
in {
  qtile = nixpkgs.qtile;
}
