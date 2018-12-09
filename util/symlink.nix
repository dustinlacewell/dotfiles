{ lib }:

with import <home-manager/modules/lib/dag.nix> { inherit lib; };

{
  symlink = src: dst: dagEntryAfter ["installPackages"] ''
    dir="$(dirname ${dst})"

    if [ ! -d "$dir" ]; then
    mkdir -p "$dir"
    fi

    if [ ! -L ${dst} ]; then
    ln -s ${src} ${dst}
    fi
  '';
}
