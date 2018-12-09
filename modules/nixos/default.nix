with import /nixcfg/util;

{
  imports = recImport ./. ++ [ /nixcfg/overlays ];

  config = {
    nixpkgs.config.allowUnfree = true;
  };
}
