{ config, pkgs, lib, ... }:

with lib;

let
  cfg = config.mine.irccat;

  gitsrc = pkgs.fetchFromGitHub {
    owner = "irccloud";
    repo = "irccat";
    rev = "17451e7e267f099e9614ec945541b624520f607e";
    sha256 = "0l99mycxymyslwi8mmyfdcqa8pdp79wcyb04s5j5y4grmlsxw1wx";
  };

  irccat = pkgs.buildGoPackage rec {
    name = "irccat-${version}";
    version = "master";
    goPackagePath = "github.com/irccloud/irccat";
    goDeps = ./irccat-deps.lib.nix;
    src = gitsrc;
  };

  generateServerEnv = name: path:
  pkgs.runCommand "${name}-irccat-env" {} ''
    mkdir $out
    cp ${path} $out/irccat.json
  '';

  generateServer = name: path:
  let
    env = generateServerEnv name path;
  in pkgs.writeScript "${name}-irccat" ''
    #!${pkgs.bash}/bin/bash
    cd ${env} && ${irccat}/bin/irccat
  '';

  generateService = name: path:
  let
    server = generateServer name path;
  in {
    description = "${name} irccat service";
    wantedBy = [ "multi-user.target" ];
    after = [ "network-online.target" ];
    serviceConfig = {
      User = cfg.user;
      Restart = "always";
      ExecStart = "${server}";
      ExecReload = "${pkgs.coreutils}/bin/kill -HUP $MAINPID";
      ExecStop = "${pkgs.coreutils}/bin/kill -INT $MAINPID";
    };
  };

  generateServices = mapAttrs generateService;
  allServices = generateServices cfg.instances;

in {
  options.mine.irccat = {
    enable = mkEnableOption "irccat";
    user = mkOption {
      type = types.string;
      default = "root";
    };
    instances = mkOption {
      default = {};
      type = types.attrsOf types.path;
    };
  };

  config = mkIf cfg.enable {
    systemd.services = allServices;
  };
}
