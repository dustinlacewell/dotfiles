{ pkgs, ... }:

with import <plugins>;

let plugins = [ org-export ];

in {
  # import additional definitions and plugins
  imports = plugins ++ [
    ../src/ssh
    ../src/emacs
    ../src/zsh
    ../src/httpie
    ../src/aws
    ../src/fasd
  ];

  home.file."dotfiles.html".source = pkgs.org-export {
    source =../README.org;
    user = "dustinlacewell";
    repo = "dotfiles";
  };
}
