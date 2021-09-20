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
    nix-index
    dropbox-cli
    lastpass-cli
    direnv
    ntfs3g
  ];
}
