{ config, pkgs, lib, ... }:

with lib;

let
  utils = import /nixcfg/util;

  godaddy = buildGoPackage rec {
    name = "terraform-provider-godaddy-${version}";
    version = "1.6.4";

    goPackagePath = "github.com/n3integration/terraform-godaddy";

    src = fetchFromGitHub {
      owner = "n3integration";
      repo = "terraform-godaddy";
      rev = "v${version}";
      sha256 = "0byydpqsimvnk11bh9iz8zlxbsmsk65w55pvkp18vjzqrhf4ky00";
    };

    # Terraform allow checking the provider versions, but this breaks
    # if the versions are not provided via file paths.
    postBuild = "mv go/bin/terraform-godaddy{,_v${version}}";
  };

  # terraform = (pkgs.terraform_0_11.overrideAttrs (oldAttrs: rec {
    #   passthru = { plugins = [ godaddy ] ++ oldAttrs.passthru.plugins; };
    # }));


in {
  options.mine.terraform.enable = mkEnableOption "terraform";

  config = mkIf config.mine.terraform.enable {
    home.packages = [ pkgs.terraform pkgs.terragrunt ];
  };
}

