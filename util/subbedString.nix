{ lib }:

with builtins;

{
  subbedString = s: args:
    let
      names = attrNames args;
      from = map (name: "@${name}@") names;
      to = map (name: args.${name}) names;
    in replaceStrings from to s;
}
