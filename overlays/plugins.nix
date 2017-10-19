args@{ config, pkgs, lib, options, ... }:

with import <nixpkgs> {};

{
  # org-build = (import ../nix-hm-org-build) args;
  org-build = import (fetchFromGitHub {
    owner = "dustinlacewell";
    repo = "nix-hm-org-build";
    rev = "c1e604690191ef616837d4b8c35f8e6110bc89ae";
    sha256 = "03037zcliyvz7xig35wszaczswcwzl730rwdpqqg61mm0g6aiij9";
  }) args;

  # org-export = (import ../nix-hm-org-export) args;
  org-export = import (fetchFromGitHub {
    owner = "dustinlacewell";
    repo = "nix-hm-org-export";
    rev = "6ebd7a537c9027765dc8f67432b78403e01142c1";
    sha256 = "0dvwxb6r1d1is9z1hicdfai5dq81zmjqllgrgk90550402vsm517";
  }) args;

}
