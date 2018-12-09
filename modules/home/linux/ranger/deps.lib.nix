{ ranger, fetchFromGitHub, python3Packages }:

{
  ranger = (ranger.overrideAttrs (oldAttrs: rec {
    name = "ranger-master";
    version = "master";

    src = fetchFromGitHub {
      owner = "ranger";
      repo = "ranger";
      rev = "8d4808fc6a0f36960ff9999b99e9030d93286e41";
      sha256= "1c96hwdizx8f9n2244bsnwk355v687a55k28rjlpb6cf2wcgbx6p";
    };

    propagatedBuildInputs = oldAttrs.propagatedBuildInputs ++
      [ python3Packages.pillow ];

    preConfigure = oldAttrs.preConfigure + ''
      # enable file previews
      substituteInPlace ranger/config/rc.conf \
      --replace "#set preview_script" "set preview_script"
    '';
  }));
}
