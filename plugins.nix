with import <nixpkgs> {};

{
  # org-build = import ../../src/nix-hm-org-build;
  org-build = import (fetchFromGitHub {
    owner = "dustinlacewell";
    repo = "nix-hm-org-build";
    rev = "924d4fec985dcac8db0f3b9aba5a76ada878a7c9";
    sha256 = "043ki0wnz45952h76p20wbyj35rcv3qh5bv714ydk6djd80cp11j";
  });

  # org-export = import ../../src/nix-hm-org-export;
  org-export = import (fetchFromGitHub {
    owner = "dustinlacewell";
    repo = "nix-hm-org-export";
    rev = "924c8f094ca8442c82949d5a2671075f4c1aeaf5";
    sha256 = "1haxvz3qd5bfbd6c63krqvvmnjkk343rawb5v3yviyclh1w6bq60";
  });
}
