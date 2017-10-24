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
    rev = "a975526d959751c849b07a52f6ef5ff9a66c8610";
    sha256 = "0idaavjv53lqk4r4rfr3v70ph9r2b2skzl7bim9lig70y8cd2apl";
  });
}
