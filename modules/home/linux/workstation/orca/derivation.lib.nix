{ pkgs }:

let
  pkgs = import <nixpkgs> {};
  orcaSrc = pkgs.fetchgit {
    url = "https://git.sr.ht/~rabbits/orca";
    rev = "3a92c8e3b3b75598ed762aee4aa34e689f1471a5";
    sha256 = "1yf8963aik77y3i403g7fzb3qqhhbqdz1zhzdbp64bmm13prxifi";
  };

in pkgs.stdenv.mkDerivation {
  name = "orca";
  src = orcaSrc;
  buildInputs = [ pkgs.ncurses pkgs.ncurses5 pkgs.portmidi ];
  buildPhase = ''
    bash ./tool build --portmidi orca
  '';
  installPhase = ''
    mkdir -p $out/bin
    install -m 755 ./build/orca $out/bin/orca
  '';
}
