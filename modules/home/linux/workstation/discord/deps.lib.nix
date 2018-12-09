{ stdenv, python3Packages, fetchFromGitHub, sassc }:

with python3Packages;

rec {
  beautifuldiscord = buildPythonApplication {
    name = "beautifuldiscord";
    src = fetchFromGitHub {
      owner = "leovoel";
      repo = "BeautifulDiscord";
      rev = "ed5b942567b0fd0b770cb0b4d65547e91f7a4f74";
      sha256 = "1w5fmvk5lac5j63f8cmzp65w61cbrv9ny0nlaxgx0gvvh1j299md";
    };
    propagatedBuildInputs = [ psutil ];
    doCheck = false;

    postPatch = ''
      sed -i -e "s/startswith('Discord')/startswith('.Discord')/" beautifuldiscord/app.py;
    '';
  };
  wal-discord = stdenv.mkDerivation {
    name = "wal-discord";

    src = fetchFromGitHub {
      owner = "guglicap";
      repo = "wal-discord";
      rev = "4f4f6c87afad2bebd12ae2c726bc5eb126c16a4f";
      sha256 = "0ab8kdscy4s30gpagd5vzqbm9xdya1mdck3bbxvyrli13qavxssz";
    };

    propagatedBuildInputs = [ sassc ];

    installPhase = ''
      mkdir -p $out/bin/
      substitute wal-discord $out/bin/wal-discord \
      --replace sassc ${sassc}/bin/sassc
      chmod +x $out/bin/wal-discord
    '';
  };
}
