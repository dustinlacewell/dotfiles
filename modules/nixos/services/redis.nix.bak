{ config, pkgs, lib, ... }:

with lib;

let cfg = config.mine.redis;
in {
  options.mine.redis = {
    enable = mkEnableOption "redis";
    password = mkOption "redis-password";
  };

  config = mkIf cfg.enable {
    services.redis = {
      enable = true;
      requirePass = cfg.password;
    };
  };
}

