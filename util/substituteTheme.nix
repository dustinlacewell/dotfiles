{ lib }:

with lib;
with builtins;

let
in {
  substituteTheme = theme: source:
    let
      scrub = filterAttrs (k: v: isString v) theme;
      names = attrNames scrub;
      from = map (n: "@${n}@") names;
      to = attrValues scrub;
      text = readFile source;
    in replaceStrings from to text;
}
