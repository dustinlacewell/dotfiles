{ config, pkgs, lib, ... }:

with lib;

with import /nixcfg/util;

let
  cfg = config.mine.workstation.rider;
  utils = import /nixcfg/util;
  nixpkgs = utils.fetchNixpkgs {
    rev    = "9842c4b1076a2f54de5e9a81fd91b2b91b1d051e";
    sha256 = "172y6qfi30pjvhrjim3z7gf89xk2g14lc1nc7bqsbdiawkp25gqh";
  };

in {
  options.mine.workstation.pycharm.enable = mkEnableOption "pycharm";

  config = mkIf cfg.enable {
    home.packages = [ nixpkgs.jetbrains.pycharm-community ];
  };
}

