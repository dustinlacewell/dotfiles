{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.fsharp.enable = mkEnableOption "fsharp";

  config = mkIf config.mine.fsharp.enable {
    home.packages = [
      pkgs.fsharp
      pkgs.dotnetPackages.FSharpData
      pkgs.dotnetPackages.FSharpAutoComplete ];
  };
}
