{ config, pkgs, lib, ... }:

with lib;

{
  options.mine.zsh.enable = mkEnableOption "zsh";

  config = mkIf config.mine.zsh.enable {
    home.packages = [
      pkgs.nano pkgs.bat pkgs.exa
    ];

    programs.zsh = {
      enable = true;
      dotDir = ".config/zsh";
      history.size = 100000;

      enableAutosuggestions = true;
      enableCompletion = true;

      sessionVariables = {
        EDITOR = "nano";
        PATH = "$HOME/bin:/usr/local/bin:$PATH:$HOME/src/nix-virtualenv/bin";
        ASPELL_CONF="dict-dir /run/current-system/sw/lib/aspell";
      };

      initExtra = ''
        bindkey -s '^[[24~q' 'exit\n'
      '';

      oh-my-zsh = {
        enable = true;
        theme = "agnoster";
        plugins = [ "common-aliases" "shink-path" ];
      };

      plugins = [
        {
          # will source zsh-autosuggestions.plugin.zsh
          name = "zsh-autosuggestions";
          src = pkgs.fetchFromGitHub {
            owner = "zsh-users";
            repo = "zsh-autosuggestions";
            rev = "v0.4.0";
            sha256 = "0z6i9wjjklb4lvr7zjhbphibsyx51psv50gm07mbb0kj9058j6kc";
          };
        }
        {
          name = "enhancd";
          file = "init.sh";
          src = pkgs.fetchFromGitHub {
            owner = "b4b4r07";
            repo = "enhancd";
            rev = "v2.2.1";
            sha256 = "0iqa9j09fwm6nj5rpip87x3hnvbbz9w9ajgm6wkrd5fls8fn8i5g";
          };
        }];
    };
  };
}
