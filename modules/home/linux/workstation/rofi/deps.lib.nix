{ python3Packages, fetchFromGitHub }:

{
  python-rofi = python3Packages.buildPythonPackage {
    name = "python-rofi";
    src = /home/ldlework/src/python-rofi;
  };

  xdg = python3Packages.buildPythonPackage {
    name = "xdg";
    src = fetchFromGitHub {
      owner = "srstevenson";
      repo = "xdg";
      rev = "91ee21928a159f486da09ac7bf9bd246dd54f518";
      sha256= "12r6rav6gmyygihaaxwz0fmilz45x4hl39vg1027kpmfs83q4b5n";
    };
    configurePhase = ''
      sed -i -e '/_require/d' setup.py
      rm -fr test
    '';
    doCheck = false;
  };
}
