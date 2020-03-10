self: super: with super;

let
in {
  qtile = (qtile.overrideAttrs (oldAttrs: rec {
    name = "my-qtile";
    buildInputs = oldAttrs.buildInputs ++ [ dbus iwlib super.pythonPackages.sh ];
    propagatedBuildInputs = [ iwlib super.pythonPackages.sh ];
  }));
}
