{
  programs.ssh = {
    enable = true;
    matchBlocks = {
      "personal.github.com" = {
        hostname = "github.com";
        user = "git";
        identityFile = "~/.ssh/personal";
      };
      "work.github.com-wk" = {
        hostname = "github.com";
        user = "git";
        identityFile = "~/.ssh/work";
      };
    };
  };
}
