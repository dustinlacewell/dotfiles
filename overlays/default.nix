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
      rev = "ae002fe44e96b868c62581e8066d559ca2179e01";
      sha256 = "1bawyz3ksw2sihv6vsgbvhdm4kn63xrrj5bavg6mz5mxml9rji89";
    })) {
      config = {
        allowUnfree = true;
      };
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

