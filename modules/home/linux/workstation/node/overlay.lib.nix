{
  nixpkgs.overlays = [
      (self: super: {
        myNodePackages = super.dontRecurseIntoAttrs (super.callPackage ./nodePackages/default.lib.nix {
          nodejs = super.nodejs;
        });
      })
  ];
}
