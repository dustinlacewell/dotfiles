{ config, pkgs, lib, ... }:

with lib;
let
  files = attrNames (builtins.readDir ./.);
  file-filter = file: (file != "default.nix" && hasSuffix ".zsh" file);
  filtered-files = filter file-filter files;
  contents = map (file:  builtins.readFile (./. + ("/" + file))) filtered-files;
  result = concatStringsSep "\n" contents;
in {
  config = mkIf config.mine.zsh.enable {
    programs.zsh.initExtra = result;
  };
}

