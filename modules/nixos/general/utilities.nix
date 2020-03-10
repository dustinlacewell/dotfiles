{ config, pkgs, ... }:

{
  documentation.man.enable = true;
  documentation.info.enable = true;

  programs = {
    less.enable = true;
    mtr.enable = true;
    zsh = {
      enable = true;
      autosuggestions.enable = true;
      enableCompletion = true;
    };
  };

  environment.systemPackages = with pkgs; [
    aspell aspellDicts.en
    coreutils lsof mkpasswd tree
    pstree  htop
    git tig bat
    zip unzip unrar
    nixops nix-index
    emacs26-nox

    dropbox-cli
    lastpass-cli
  ];
}
