{ config, pkgs, lib, ... }:

with lib;

let
  hostname = config.networking.hostName;

  hmsrc = pkgs.fetchFromGitHub {
    owner = "rycee";
    repo = "home-manager";
    rev = "5d63abb473d930a78661a74e26b9f997d7b3ccd6";
    sha256 = "07c7nkdnx3ppr85n3swz547ihbp6xsxin407ajvgywadph0dz99y";
  };
  hm = import "${hmsrc.out}/home-manager/default.nix" { inherit pkgs; };

in {

  environment.systemPackages = [
    # easy switch helper
    (pkgs.writeScriptBin "switch" ''
      sudo nixos-rebuild switch
    '')

    # home-manager and switch helper
    (pkgs.writeScriptBin "hm-switch" ''
      ${hm}/bin/home-manager -I home-manager=${hmsrc} -v -f /nixcfg/hosts/${hostname}/home.nix switch
      code=$?
      ${pkgs.findutils}/bin/find "$HOME/.config/qtile/" -name "*.pyc" -exec rm -f {} \;
      exit $code
    '')
  ];
}
