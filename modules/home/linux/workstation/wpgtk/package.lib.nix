{ pkgs }:

with pkgs;

python37Packages.buildPythonApplication rec {
  format = "setuptools";
  pname = "wpgtk";
  version = "5.8.1";

  src = fetchFromGitHub {
    owner = "deviantfero";
    repo = "wpgtk";
    rev = "${version}";
    sha256 = "0dkm9fikhi0i8pwg1q9rf0b57yf6bilbbv8bsd065d9iklalw0rr";
  };

  pythonPath = [
    python37Packages.pygobject3
    python37Packages.pillow
    pywal
    imagemagick
  ];

  buildInputs = [
    wrapGAppsHook
    gtk3
    gobjectIntrospection
    gnome3.adwaita-icon-theme
    libxslt
    python37Packages.wheel
  ];

  # The $HOME variable must be set to build the package. A "permission denied" error will occur otherwise
  preBuild = ''
    export HOME=$(pwd)
  '';

}
