{ ... }:

with import <nixpkgs/lib> ;

let
  getDir = dir: mapAttrs (file: type:
    if type == "directory"
    then getDir (dir + "/${file}")
    else type)
    (builtins.readDir dir);

  allFiles =
    dir: collect isString
    (mapAttrsRecursive
      (path: type: concatStringsSep "/" path)
      (getDir dir));

  matchFile = regexp: file:
    null != (builtins.match regexp file);

  anyMatchForFile = regexps: file:
    builtins.all (regexp: !(matchFile regexp file)) regexps;

  filteredFiles = regexps: dir:
    map (file: dir + "/${file}")
    (filter (file: anyMatchForFile regexps file) (allFiles dir));

  filteredModules = regexps: dir:
    map (file: import file) (filteredFiles regexps dir);


  stableFilters = ["default.nix" "unstable.*" "python.*"];

  stable = filteredModules stableFilters ./.;

  unstable = [(self: super: {
    unstable = (import (super.fetchFromGitHub {
      owner = "nixos";
      repo = "nixpkgs-channels";
      rev = "e85c1f586807b5acd244df4c45a5130aa3f0734d";
      sha256 = "1xy1qgam0i2fyqhaczw0qrx8yv3hgdh9jp47wmln5ljiixr5ic5n";
    })) {
      config = {};
      overlays = filteredModules [] ./unstable;
    };
  })];

  python3 = [(self: super: {
    python3 = super.python3.override (old:
      let
        po = old.packageOverrides or (self: super: {});
        pythonModules = filteredModules [] ./python3;
        pythonPackages = map (m: m self) pythonModules;
      in {
        packageOverrides =
          foldl' composeExtensions (self: super: {}) pythonPackages;
      }
    );
  })];

in {
  nixpkgs.overlays = stable ++ unstable;
}

