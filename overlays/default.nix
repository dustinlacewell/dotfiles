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
      rev = "ca2ba44cab47767c8127d1c8633e2b581644eb8f";
      sha256 = "1jg7g6cfpw8qvma0y19kwyp549k1qyf11a5sg6hvn6awvmkny47v";
    })) {
      config = {};
      overlays = python3 ++ (filteredModules [] ./unstable);
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

