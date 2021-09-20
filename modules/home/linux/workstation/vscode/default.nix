{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.workstation.vscode;
  plat = "linux-x64";
  archive_fmt = "tar.gz";
  extensions = (with pkgs.vscode-extensions; [
      bbenoist.nix
      # ms-python.python
      ms-azuretools.vscode-docker
      ms-vscode-remote.remote-ssh
      ms-vsliveshare.vsliveshare
      redhat.java
  ]) ++ pkgs.vscode-utils.extensionsFromVscodeMarketplace [
    {
      name = "emacs-mcx";
      publisher = "tuttieee";
      version = "0.27.0";
      sha256 = "135q7bwc5d9wk9n8mz4lw996mxhaix3j7y444gfiirkryixy4d03";
    }
    {
      name = "prettier-vscode";
      publisher = "esbenp";
      version = "6.3.1";
      sha256 = "0m2xx4r2sy00f3wvzi9968rxq345k057ybr21jyvkrwm5569c5mm";
    }
    {
      name = "prettier-vscode";
      publisher = "esbenp";
      version = "6.3.1";
      sha256 = "0m2xx4r2sy00f3wvzi9968rxq345k057ybr21jyvkrwm5569c5mm";
    }
    {
      name = "vscode-eslint";
      publisher = "dbaeumer";
      version = "2.1.19";
      sha256 = "0cgl2hvsha51fibmf7qx88d2j9zw2i2bng6bwwbivbpq73lgg24y";
    }
    {
      name = "vscode-powertools";
      publisher = "ego-digital";
      version = "0.64.0";
      sha256 = "03pgp7c93rx9i259fm7fbbkallmgvg80wk9v3mhklx2r1zjdgqak";
    }
    {
      name = "multi-command";
      publisher = "ryuta46";
      version = "1.5.0";
      sha256 = "0h7gm51rygjhfxh2nsggsgkpxzy0j1zxknx1rh80kc356ys8ybii";
    }
    {
      name = "format-code-action";
      publisher = "rohit-gohri";
      version = "0.1.0";
      sha256 = "1b1z49vjmqmpdxpgknp015rir0jnqa6z8nm8h4lxip3wa9jizbcg";
    }
    {
      name = "vscode-tailwindcss";
      publisher = "bradlc";
      version = "0.5.10";
      sha256 = "1bq91m0547z9szxq89g3i3waql2pa6h71zl66pwlnn3am7girzxs";
    }
    {
      name = "editorconfig";
      publisher = "editorconfig";
      version = "0.16.4";
      sha256 = "0fa4h9hk1xq6j3zfxvf483sbb4bd17fjl5cdm3rll7z9kaigdqwg";
    }
    {
      name = "tsimportsorter";
      publisher = "dozerg";
      version = "7.3.1";
      sha256 = "1mv37amiwb0dg5bwykrwrxrhdhfmr2596pxw5gsdpayy9cy9nkqv";
    }
    {
      name = "angular-console";
      publisher = "nrwl";
      version = "17.1.0";
      sha256 = "1mnqs0ivwj06ff993dgfr4v8y740pvyjwr9my476njw6nvcyvrgi";
    }
    {
      name = "code-spell-checker";
      publisher = "streetsidesoftware";
      version = "1.10.2";
      sha256 = "1ll046rf5dyc7294nbxqk5ya56g2bzqnmxyciqpz2w5x7j75rjib";
    }
    {
      name = "auto-barrel";
      publisher = "mikehanson";
      version = "1.9.1";
      sha256 = "0y3rs95jv675n0xlwa7d6s2ak9mi6dfvdzn8x76rja640nfn9hmk";
    }
    {
      name = "mdx";
      publisher = "silvenon";
      version = "0.1.0";
      sha256 = "1mzsqgv0zdlj886kh1yx1zr966yc8hqwmiqrb1532xbmgyy6adz3";
    }
    {
      name = "godot-tools";
      publisher = "geequlim";
      version = "1.1.2";
      sha256 = "0qlh1lsyzvb8syp8rhpqvci3blq8jv8vnqrr4p0yixiqqn8ysk60";
    }
    {
      name = "godot-csharp-vscode";
      publisher = "neikeq";
      version = "0.1.3";
      sha256 = "12whrhyd3ab1gljmp2s5p2pri9cdl3q4sxrb1gy0xaxwdsr6pxlf";
    }
    {
      name = "csharp";
      publisher = "ms-dotnettools";
      version = "1.23.12";
      sha256 = "1j76399f5xhyn3qjp9gjdin7rdzn6bhig0xkswznf2yainz2x84z";
    }
    {
      name = "mono-debug";
      publisher = "ms-vscode";
      version = "0.16.2";
      sha256 = "10hixqkw5r3cg52xkbky395lv72sb9d9wrngdvmrwx62hkbk5465";
    }
    {
      name = "copilot";
      publisher = "GitHub";
      version = "1.4.2635";
      sha256 = "1lvm39bkxkcfd1ayc112xdr2wgw0x9y3nrlm048w0r1jvzfwq76a";
    }
    {
      name = "vscode-monorepo-workspace";
      publisher = "folke";
      version = "1.3.1";
      sha256 = "0mzbmbb1s541z0lcxml3h70sa802yqcxvzc0v7ca7rpysivl3lh6";
    }
    {
      name = "vscode-javascript-booster";
      publisher = "sburg";
      version = "14.0.1";
      sha256 = "0189jyyxa3spv7cikqb077ms7gpi9r2wp1ymx28ad636srnq1ml8";
    }
     # {
     #   name = "js-debug";
     #   publisher = "ms-vscode";
     #   version = "2021.8.417";
     #   sha256 = "1w08d5gj2xykrg4sf790iss51z6cv21313aqrjh6nab2a405p800";
     # }
     {
       name = "vscode-java-debug";
       publisher = "vscjava";
       version = "0.35.0";
       sha256 = "01sskdm7fizzh6d8bzgdmj9pmrshvh58ks0l6qyf0gr2ifnhli57";
     }
     {
       name = "vscode-maven";
       publisher = "vscjava";
       version = "0.32.2";
       sha256 = "0hn37li6wv5w0m92svr1bmmspwrwcn7k7bm59a58kfgs5j8sccax";
     }
     {
       name = "vscodeintellicode";
       publisher = "VisualStudioExptTeam";
       version = "1.2.14";
       sha256 = "1j72v6grwasqk34m1jy3d6w3fgrw0dnsv7v17wca8baxrvgqsm6g";
     }
     {
       name = "haskell";
       publisher = "haskell";
       version = "1.6.1";
       sha256 = "1l6nrbqkq1p62dkmzs4sy0rxbid3qa1104s3fd9fzkmc1sldzgsn";
     }
     {
       name = "language-haskell";
       publisher = "justusadam";
       version = "3.4.0";
       sha256 = "0ab7m5jzxakjxaiwmg0jcck53vnn183589bbxh3iiylkpicrv67y";
     }
     {
       name = "haskell-linter";
       publisher = "hoovercj";
       version = "0.0.6";
       sha256 = "0fb71cbjx1pyrjhi5ak29wj23b874b5hqjbh68njs61vkr3jlf1j";
     }
     {
       name = "phoityne-vscode";
       publisher = "phoityne";
       version = "0.0.27";
       sha256 = "0xhywyf1cd942nh7y5kgjg3407v1k4wxy73x4r97h29sr3gv5sbg";
     }
     # {
     #   name = "java";
     #   publisher = "redhat";
     #   version = "0.80.0";
     #   sha256 = "1w08d5gj2xykrg4sf790iss51z6cv21313aqrjh6nab2a405p811";
     # }
  ];

   insiders = (pkgs.vscode.override { isInsiders = true;}).overrideAttrs (old: rec {
     sourceExecutableName = "code-insiders";
     src = pkgs.fetchurl {
       name = "VSCode_insiders.tar.gz";
       url = "https://code.visualstudio.com/sha/download?build=insider&os=linux-x64";
       sha256 = "084nv6h98wmnx0jx0mdm320s84yqnl1ifarv8nqx21hbq4khdp4k";
     };
   });

   code-insiders = (pkgs.vscode-with-extensions.override {
     vscode = insiders;
     vscodeExtensions = extensions;
   });

   code = (pkgs.vscode-with-extensions.override {
     vscodeExtensions = extensions;
   });

in {
  options.mine.workstation.vscode = {
    enable = mkEnableOption "vscode";
  };

  config = mkIf cfg.enable {
    home.packages = [ code ];
  };
}
