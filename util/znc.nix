pkgs:

with pkgs.lib;

{ users, port ? 5000 }:

let
  secrets = import /nixcfg/external/private;
  znc-users = mapAttrs (username: userconfig: {
    Admin = true;
    QuitMsg = "co'o ro do";
    Nick = "${username}";
    AltNick = "${username}_";
    Ident = "${username}";
    Buffer = userconfig.buffer;

    Pass.password = secrets.znc-auth;

    Network = mapAttrs (network: conf: {
      LoadModule = [ "sasl" ];
      Server = conf;
    }) userconfig.network;
  }) users;

in {
  services.znc = {
    enable = true;
    useLegacyConfig = false;
    openFirewall = true;
    mutable = false;
    config = {
      Listener.l = {
        Port = 5000;
        IPv4 = true;
        IPv6 = false;
        SSL = true;
      };

      User = znc-users;
    };
  };

  system.activationScripts = {
    znc-sasl = stringAfter [ "etc" ]
      (concatStringsSep "\n"
        (mapAttrsToList (username: user-conf:
          (concatStringsSep "\n"
            (mapAttrsToList (servername: server-conf: ''
              mkdir -p /var/lib/znc/users/${username}/networks/${servername}/moddata/sasl/
              echo $'password ${user-conf.password}\nusername ${username}' > /var/lib/znc/users/${username}/networks/${servername}/moddata/sasl/.registry'')
              user-conf.network)))
          users));
    znc-pem = stringAfter [ "etc" ]
      ''
        cd /var/lib/znc
        ${pkgs.openssl}/bin/openssl req -nodes -newkey rsa:2048 -keyout znc.pem -x509 -days 3650 -out znc.pem -subj "/CN=ldlework"
        echo "SSL Key Created"
      '';
  };
}




