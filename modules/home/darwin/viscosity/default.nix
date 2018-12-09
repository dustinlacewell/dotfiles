{ config, pkgs, lib, ... }:

let
  udp = { host, port ? 1194 }: { host = host; port = port; type = "udp"; };
  tcp = { host, port ? 443 }: { host = host; port = port; type = "tcp-client"; };

  credPath = "Library/Application Support/Viscosity/OpenVPN";

in {
  home.file."${credPath}/ca.crt".text = builtins.getEnv "WORKIVA_VPN_CA";
  home.file."${credPath}/cert.crt".text = builtins.getEnv "WORKIVA_VPN_CERT";
  home.file."${credPath}/key.key".text = builtins.getEnv "WORKIVA_VPN_KEY";
  home.file."${credPath}/ta.key".text = builtins.getEnv "WORKIVA_VPN_TA";

  programs.viscosity = {
    enable = true;
    connections = {
      "Harbour Demo"       = [(udp {host="vpn.demo.wdesk.com"; })];
      "Harbour Pentest"    = [(udp {host="vpn.olympus.wdesk.com";})];
      "Harbour Sandbox"    = [(udp {host="vpn.sandbox.wdesk.com";})];
      "Harbour Production" = [(udp {host="vpn.app.wdesk.com";})];
      "Harbour EU"         = [(udp {host="vpn.eu.wdesk.com";})];
      "Harbour Inf-Dev"    = [(udp {host="vpn.inf-dev.workiva.org";})];
      "Harbour Inf-Tools"  = [(udp {host="vpn.inf.workiva.net";})];
      "Harbour Wk-Dev"     = [(udp {host="vpn.wk-dev.wdesk.org";})];
      "Harbour Squad2"     = [(udp {host="52.37.152.251";})];
      "Corporate"          = [(udp {host="admvpn.webfilings.org"; port=1196; })
      ];
    };
  };
}
