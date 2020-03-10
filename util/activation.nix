{ lib }:

with import <home-manager/modules/lib/dag.nix> { inherit lib; };

{
  activation = txt: dagEntryAfter ["installPackages"] txt;
}
