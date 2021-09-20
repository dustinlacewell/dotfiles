{ ... }:

let
  pkgs = import <nixpkgs> { };

in with pkgs.lib;

let
  getDir = dir:
    mapAttrs (file: type:
      if type == "directory" then getDir (dir + "/${file}") else type)
    (builtins.readDir dir);

  allFiles = dir:
    collect isString
    (mapAttrsRecursive (path: type: concatStringsSep "/" path) (getDir dir));

  matchFile = regexp: file: null != (builtins.match regexp file);

  anyMatchForFile = regexps: file:
    builtins.all (regexp: !(matchFile regexp file)) regexps;

  filteredFiles = regexps: dir:
    map (file: dir + "/${file}")
    (filter (file: anyMatchForFile regexps file) (allFiles dir));

  filteredModules = regexps: dir:
    map (file: import file) (filteredFiles regexps dir);

  stableFilters = [ "default.nix" ];

  stable = filteredModules stableFilters ./.;

in {
  # nixpkgs.overlays = stable;
}

