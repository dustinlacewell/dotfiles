{ python3Packages, fetchFromGitHub }:

with python3Packages;

rec {
  requests-file = buildPythonPackage {
    name = "requests-file";
    src = fetchFromGitHub {
      owner = "dashea";
      repo = "requests-file";
      rev = "d57a6a0c10ed3d67b014bd2f1896f38cf98565ad";
      sha256 = "01dmhkw1ina5hx46vh3h0gk3m971rl4jj0ndvvg9rc607jh7dwqj";
    };
    propagatedBuildInputs = [ requests ];
    doCheck = false;
  };

  requests = buildPythonPackage {
    name = "requests";
    src = fetchFromGitHub {
      owner = "requests";
      repo = "requests";
      rev = "8472dbd13408e35611a38d58f32eb531ce0ffe1e";
      sha256 = "121gglgr1ncvz9yf1bi6xnz8h38shnlsbcfjcjaskmifai9x63rr";
    };
    buildInputs = [ urllib3 ];
    propagatedBuildInputs = [ urllib3 chardet ];
    doCheck = false;
  };

  tldextract = buildPythonPackage {
    name = "tldextract";
    src = fetchFromGitHub {
      owner = "john-kurkowski";
      repo = "tldextract";
      rev = "fecd89fab44f8308d2f2281cc39d84cdf25715a2";
      sha256 = "1mgx4kzmyr33brf8y0w7fcnzhbm1bgqkj0h436r28p3s8swmwij4";
    };
    buildInputs = [ requests requests-file ];
    propagatedBuildInputs = [ requests requests-file ];
    doCheck = false;
  };
}
