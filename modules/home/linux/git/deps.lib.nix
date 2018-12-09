{ python3Packages, fetchFromGitHub }:

with python3Packages;

rec{
  whelk = buildPythonPackage {
    name = "whelk";
    src = fetchFromGitHub {
      owner = "seveas";
      repo = "whelk";
      rev = "9274ff9f54f4e5d2de70b9c22da368494501883e";
      sha256 = "0i8xkb63qw028gib6g97rad6qnqwc848q1xqc66521kp321p7bmp";
    };
  };

  git-spindle = buildPythonPackage {
    name = "git-spindle";
    src = fetchFromGitHub {
      owner = "seveas";
      repo = "git-spindle";
      rev = "e174b4ad26965ab8d0f7a959fb0d40db4e7f427e";
      sha256 = "00n9h7drjflyb8ix6k508l3pwjj1rvqbficdx828w4d2a21q5f1y";
    };
    propagatedBuildInputs = [ docopt whelk github3_py dateutil ];
  };
}
