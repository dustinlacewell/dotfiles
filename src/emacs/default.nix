args@{ pkgs, plugins, ...}:

let
  # export init.org to Github Pages
  export = plugins.org-export.export {
    source = ./init.org;
    user = "dustinlacewell";
    repo = "emacs.d";
    token = builtins.getEnv "EMACS_D_GITHUB_TOKEN";
  };

in {
  # import org-build to load its Options
  imports = [ plugins.org-build.module ];
  # ensure that emacs gets installed
  programs.emacs = { enable = true; };
  # compile init.el from init.org
  programs.emacs.org-build = { enable = true; source = ./init.org; };
}
