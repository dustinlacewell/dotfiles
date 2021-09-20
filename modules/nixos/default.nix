with import /nixcfg/util;

{
  imports = recImport ./. ++ [ /nixcfg/overlays /etc/nixos/cachix.nix ];

  config = {
    nixpkgs.config.allowUnfree = true;

    boot.kernel.sysctl = {
      "vm.mmap_min_addr" = 0;
    };
  };
}
