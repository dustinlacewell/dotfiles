args@{ config, pkgs, lib, options, ... }:

let
  plugins = import <plugins> args;

  # # export dotfiles readme to github pages
  dotfiles = plugins.org-export.export {
    source =../README.org;
    user = "dustinlacewell";
    repo = "dotfiles";
    token = builtins.getEnv "EMACS_D_GITHUB_TOKEN";
  };

in {
  # enable plugin argument
  config._module.args.plugins = plugins;

  # import additional definitions
  imports = [
    ../src/ssh
    ../src/emacs
    ../src/zsh
  ];

}
