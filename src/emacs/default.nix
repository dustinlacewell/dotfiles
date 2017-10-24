{ pkgs, ... }:

let
  plugins = import <plugins>;

in {
  imports = [
    plugins.org-build
    plugins.org-export
  ];

  # ensure that emacs gets installed
  programs.emacs = { enable = true; };
  # compile init.el from init.org
  home.file.".emacs.d/init.el".source = pkgs.org-build { source = ./init.org; };
  # export init.html from init.org
  home.file.".emacs.d/init.html".source = pkgs.org-export {
    source = ./init.org;
    user = "dustinlacewell";
    repo = "emacs.d";
  };
}
