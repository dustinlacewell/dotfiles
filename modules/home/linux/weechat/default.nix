{ config, pkgs, lib, ... }:

with lib;
with import /nixcfg/util;

let
  cfg = config.mine.weechat;

  matrix = pkgs.weechat-matrix-bridge.overrideAttrs (old: {
    src = pkgs.fetchFromGitHub {
      owner = "torhve";
      repo = "weechat-matrix-protocol-script";
      rev = "8d32e90d864a8f3f09ecc2857cd5dd6e39a8c3f7";
      sha256 = "0qqd6qmkrdc0r3rnl53c3yp93fbcz7d3mdw3vq5gmdqxyym4s9lj";
    };
  });

  wrapper = pkgs.writeShellScriptBin "weechat" ''
    ${pkgs.kitty}/bin/kitty ${pkgs.weechat}/bin/weechat
  '';

in {
  options.mine.weechat.enable = mkEnableOption "weechat";
  options.mine.weechat.mutable-config = mkOption {
    type = types.string;
  };

  config = mkIf cfg.enable {
    home.packages = [ matrix wrapper ];
    home.activation = mkIf (cfg.mutable-config != "") {
      weechat = symlink cfg.mutable-config "~/.weechat";
    };
  };
}

