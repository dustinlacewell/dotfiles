{pkgs, lib, ... }:

with lib;
with builtins;

let
  username = "dustinlacewell";
  reponame = "emacs.d";
  token = getEnv "EMACS_D_GITHUB_TOKEN";

in {

  config = {
    programs.emacs = {
      enable = true;
      package = pkgs.emacs;
      extraPackages = epkgs: [
        epkgs.badger-theme
      ];
    };

    programs.orgBuild = {
      enable = true;
      source = ./init.org;
    };

    programs.orgExport = {
      enable = true;
      source = ./init.org;
      giturl = "https://${username}:${token}@github.com/${username}/${reponame}.git";
    };
  };
}
