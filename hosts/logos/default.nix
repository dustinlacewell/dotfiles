let
  secrets = import /nixcfg/external/private;
in {
  imports = [
    ../../modules/nixos
    /etc/nixos/hardware-configuration.nix
  ];

  nix.useSandbox = true;

  system.stateVersion = "19.03";
  networking.hostName = "logos";
  time.timeZone = "America/Chicago";

  mine.precision5520 = true;
  mine.workstation.enable = true;
  mine.docker.enable = true;
  mine.ddclient.enable = false;
  mine.nginx.enable = true;
}
