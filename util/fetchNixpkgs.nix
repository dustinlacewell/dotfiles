{ lib }: {

  fetchNixpkgs = {
    rev,                             # The Git revision of nixpkgs to fetch
    sha256,                          # The SHA256 hash of the unpacked archive
    system ? builtins.currentSystem,  # This is overridable if necessary
    owner ? "NixOS"
  }:

    import (builtins.fetchTarball {
      url = "https://github.com/${owner}/nixpkgs/archive/${rev}.tar.gz";
      inherit sha256;
    }) { config = { allowUnfree = true; }; };
}
