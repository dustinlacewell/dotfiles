{ config, pkgs, lib, ... }:

with lib;

let
  mycli = (pkgs.mycli.overrideAttrs (oldAttrs: rec {
    src = pkgs.python3.pkgs.fetchPypi {
      pname = oldAttrs.pname; version = oldAttrs.version;
      sha256 = "0x5vzl4vvirqy03fnjwkamhzrqkknlajamwz1rmbnqh4bfmijh9m";
    };
    doCheck = false;
    doInstallCheck = false;
    checkInputs = [ ];
    checkPhase = '''';
    propagatedBuildInputs = oldAttrs.propagatedBuildInputs ++ [ pkgs.python3.pkgs.paramiko ];
  }));

in {
  options.mine.mycli.enable = mkEnableOption "mycli";

  config = mkIf config.mine.mycli.enable {
    home.packages = [ mycli ];
  };
}

