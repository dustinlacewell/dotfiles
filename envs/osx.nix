{ ... }:

let
  nixpkgs = (import <nixpkgs>{});

  org-build = (nixpkgs.fetchFromGitHub {
    owner = "dustinlacewell";
    repo = "nix-hm-org-build";
    rev = "1120545faa46254333ec9b3793c009a6f0800b82";
    sha256 = "0fxl1ib601jvj669j04kq3qnc9ga5y37nkjvfdkfxprk54iilr2y";
  }).outPath;

  org-export = (nixpkgs.fetchFromGitHub {
    owner = "dustinlacewell";
    repo = "nix-hm-org-export";
    rev = "0a63da3086ebd876f4837d02f782ec0de59e1462";
    sha256 = "0myjmm7d3vbkgqnnpmb9fsvshs4v7jvl5nfc1ygmcnfn95vg3jlb";
  }).outPath;

  plugins = [ org-build org-export ];

in {
  imports = plugins ++ [
    ../src/ssh
    ../src/emacs
    ../src/zsh
  ];
}
