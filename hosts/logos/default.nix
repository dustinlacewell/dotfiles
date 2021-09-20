{pkgs, ...}:
let
  secrets = import /nixcfg/external/private;
  shares = import ./shares.nix;
  udev = import ./udev.nix;
in {
  imports = [
    ../../modules/nixos
    /etc/nixos/hardware-configuration.nix
  ];

  nix.nixPath = [ "nixpkgs=/nixpkgs" "nixos-config=/etc/nixos/configuration.nix" ];

  nix.useSandbox = true;

  system.stateVersion = "19.03";
  networking.hostName = "logos";
  time.timeZone = "America/Chicago";

  mine.precision5520 = true;
  mine.workstation.enable = true;
  mine.docker.enable = true;
  mine.ddclient.enable = false;
  mine.nginx.enable = true;
  services.nginx.appendHttpConfig = ''
    disable_symlinks off;
  '';

  virtualisation.virtualbox.host.enable = true;
  virtualisation.virtualbox.host.enableExtensionPack = true;
  users.extraGroups.vboxusers.members = [ "ldlework" ];
  users.extraUsers.ldlework.extraGroups = [ "libvirtd" "syncthing" "audio" "video" "jackaudio" "adbusers" "vboxusers"];

  services.avahi = {
    enable = true;
    nssmdns = true;
    publish.enable = true;
    publish.addresses = true;
    publish.workstation = true;
  };

  services.synergy.server = {
    enable = true;
    screenName = "logos";
    address = "0.0.0.0:24800";
    configFile = "/home/ldlework/.config/synergy/server.conf";
  };

  programs.adb.enable = true;
  services.openssh.enable = true;
  services.openssh.openFirewall = true;
  nixpkgs.config.allowUnfree = true;
  services.samba = shares;
  services.udev.extraRules = udev;

  networking.extraHosts =
    ''
    139.162.216.173 services.fn
    '';
  networking.firewall.allowPing = true;
  networking.firewall.allowedTCPPorts = [ 445 139 80 81 3000 8000 8001 8080 24800 25565 4000 4001 4002 6881 ];
  networking.firewall.allowedUDPPorts = [ 137 138 ];

  services.gnome3.gnome-keyring.enable = true;
  programs.dconf.enable = true;
  programs.seahorse.enable = true;

  environment.systemPackages = with pkgs; [
    zoom-us
    youtube-dl
    gnome3.gnome_keyring
    python27Packages.keyring
  ];

  services.gnome3 = {
      seahorse.enable = true;
      at-spi2-core.enable = true;
  };

  # services.syncthing = {
  #   enable = true;
  #   user = "ldlework";
  #   dataDir = "/home/ldlework/sync/";
  #   configDir = "/home/ldlework/sync/.config/syncthing";
  #   declarative = {
  #     devices = {
  #       wharf = {
  #         id = "NOZ3N4H-Z7CPBFO-EBUXB6E-JWVABYI-N2HCUB4-BD7OCAL-TNYMYUW-LGC5HQR";
  #       };
  #       dozer = {
  #         id = "SCRO7QB-ZUYDYJH-G6TXGZ3-HTZFT3M-N44VTOK-QTSETVB-2JYVABG-MOTKJQQ";
  #       };
  #       phone = {
  #         id = "URFQEHB-5HP4VDG-RMR5JXS-7QUSYXP-FOXRQ5T-274FKD6-LJRVDRC-4KOC4AF";
  #       };
  #     };
  #     folders = {
  #       "/home/ldlework/org" = {
  #         id = "org";
  #         devices = [
  #           "wharf"
  #           "dozer"
  #           "phone"
  #         ];
  #         watch = true;
  #       };
  #       "/home/ldlework/media/library/" = {
  #         id = "books";
  #         devices = [
  #           "phone"
  #         ];
  #         watch = true;
  #       };
  #     };
  #   };
  # };

  # services.jack = {
    #   jackd.enable = true;
    #   # support ALSA only programs via ALSA JACK PCM plugin
    #   alsa.enable = false;
    #   # support ALSA only programs via loopback device (supports programs like Steam)
    #   loopback = {
      #     enable = true;
      #     # buffering parameters for dmix device to work with ALSA only semi-professional sound programs
      #     #dmixConfig = ''
      #     #  period_size 2048
      #     #'';
      #   };
      # };


  system.fsPackages = [ pkgs.sshfsFuse ];

  # fileSystems."/media/foundry" = {
  #   device = "${pkgs.sshfsFuse}/bin/sshfs#ldlework@foundry.drakonis.xyz:/var/lib/foundry-vtt/";
  #   fsType = "fuse";
  #   options = [
  #     "_netdev" "users" "allow_other"
  #     "idmap=user" "uid=1000" "gid=100"
  #     "reconnect"
  #     # "IdentityFile=/home/ldlework/.ssh/id_rsa"
  #   ];
  # };


  # fileSystems."/media/mc" = {
  #   device = "${pkgs.sshfsFuse}/bin/sshfs#root@198.71.48.112:/";
  #   fsType = "fuse";
  #   options = [
  #     "_netdev" "users" "allow_other"
  #     "idmap=user" "uid=1000" "gid=100"
  #     "reconnect"
  #     # "IdentityFile=/home/ldlework/.ssh/id_rsa"
  #   ];
  # };

  # fileSystems."/media/windows" = {
  #     device = "//192.168.0.248/D";
  #     fsType = "cifs";
  #     options = let
  #       # this line prevents hanging on network split
  #       automount_opts = "x-systemd.automount,noauto,x-systemd.idle-timeout=60,x-systemd.device-timeout=5s,x-systemd.mount-timeout=5s";
  #     in ["${automount_opts},credentials=/etc/nixos/smb-secrets"];
  # };
}
