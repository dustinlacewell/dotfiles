let
  secrets = import /nixcfg/external/private;
  shares = import ./shares.nix;
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

  virtualisation.libvirtd.enable = true;
  users.extraUsers.ldlework.extraGroups = [ "libvirtd" "syncthing" ];

  services.openssh.enable = true;
  services.openssh.openFirewall = true;
  nixpkgs.config.allowUnfree = true;
  services.samba = shares;

  networking.firewall.allowPing = true;
  networking.firewall.allowedTCPPorts = [ 445 139 ];
  networking.firewall.allowedUDPPorts = [ 137 138 ];

  services.syncthing = {
    enable = true;
    user = "ldlework";
    declarative = {
      devices = {
        wharf = {
          id = "NOZ3N4H-Z7CPBFO-EBUXB6E-JWVABYI-N2HCUB4-BD7OCAL-TNYMYUW-LGC5HQR";
        };
        dozer = {
          id = "SCRO7QB-ZUYDYJH-G6TXGZ3-HTZFT3M-N44VTOK-QTSETVB-2JYVABG-MOTKJQQ";
        };
      };
      folders = {
        "/home/ldlework/org" = {
          id = "org";
          devices = [
            "wharf"
            "dozer"
          ];
          watch = true;
        };
      };
    };
  };

}
