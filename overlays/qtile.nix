self: super: with super;

let
  iwlib = self.pythonPackages.buildPythonPackage {
    name = "iwlib";
    src = pkgs.fetchFromGitHub {
      owner = "nathan-hoad";
      repo = "python-iwlib";
      rev = "f7604de0a27709fca139c4bada58263bdce4f08e";
      sha256= "1pjxvf9kjn362jsczkggvll4l8988xis1fy9rp9ayzhy9p4wsvds";
    };
    doCheck = false;

    propagatedBuildInputs = [ self.pythonPackages.cffi self.wirelesstools ];
  };

in {
  qtile = (qtile.overrideAttrs (oldAttrs: rec {
    name = "my-qtile";
    buildInputs = oldAttrs.buildInputs ++ [ dbus iwlib super.pythonPackages.sh ];
    propagatedBuildInputs = [ iwlib super.pythonPackages.sh ];
  }));
}
