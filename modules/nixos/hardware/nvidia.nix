{ config, pkgs, lib, ... }:

with lib;

let
  nvidia-offload = pkgs.writeShellScriptBin "nvidia-offload" ''
    export __NV_PRIME_RENDER_OFFLOAD=1
    export __NV_PRIME_RENDER_OFFLOAD_PROVIDER=NVIDIA-G0
    export __GLX_VENDOR_LIBRARY_NAME=nvidia
    export __VK_LAYER_NV_optimus=NVIDIA_only
    exec -a "$0" "$@"
  '';
in {
  options.mine.nvidia = mkEnableOption "Nvidia Support";

  config = mkIf config.mine.nvidia {
    # Nvidia support
    environment.systemPackages = with pkgs; [
      glxinfo
      cudatoolkit
      vdpauinfo
      nvidia-offload
    ];

    # services.xserver.useGlamor = true;
    services.xserver.videoDrivers = [ "nvidia" ];

    # Nvidia support
    # hardware.opengl = {
    #   enable = true;
    #   driSupport32Bit = true;
    #   extraPackages = with pkgs; [
    #     # intel-media-driver # LIBVA_DRIVER_NAME=iHD
    #     vaapiIntel         # LIBVA_DRIVER_NAME=i965 (older but works better for Firefox/Chromium)
    #     vaapiVdpau
    #     libvdpau-va-gl
    #   ];
    # };

  # nixpkgs.config.packageOverrides = pkgs: {
  #   vaapiIntel = pkgs.vaapiIntel.override { enableHybridCodec = true; };
  # };

    hardware.nvidia.prime = {
      sync.enable = true;
      # offload.enable = true;
      nvidiaBusId="PCI:1:0:0";
      intelBusId="PCI:0:2:0";
    };
  };
}
