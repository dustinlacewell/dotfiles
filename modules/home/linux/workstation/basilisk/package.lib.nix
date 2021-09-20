{ overrideCC, gccStdenv, gcc8, stdenv, fetchpatch, fetchFromGitHub, automake, autoconf
, SDL2, pkgconfig, gtk2, glibc, /*linuxHeaders*/ }:

/*((overrideCC gccStdenv gcc8)*/stdenv.mkDerivation rec {
  pname = "BasiliskII";
  version = "2019-02-17";
  name = "${pname}-${version}";

  patches = [
    (fetchpatch {
      url = "https://github.com/cebix/macemu/pull/181.patch";
      sha256 = "033ybxp46hyn9vdfb33r1n9l8fj543wvnrqyb7q22vw4lj30mxbg";
    })
  ];

  preConfigure = ''
    cd BasiliskII/src/Unix
    NO_CONFIGURE=1 ./autogen.sh
  '';
    #CFLAGS+=" -I${linuxHeaders}/include "
    #CXXFLAGS+=" -I${linuxHeaders}/include "

  nativeBuildInputs = [ automake autoconf pkgconfig ];

  buildInputs = [ SDL2 gtk2 /*linuxHeaders*/ /*glibc*/ ];

  configureFlags = [
    "--enable-sdl-video"
    "--enable-sdl-audio"
    "--disable-vosf"
    "--disable-jit-compiler"
    "--with-x"
    "--with-gtk"
    #''CFLAGS=-I${linuxHeaders}/include''
    #''CXXFLAGS=-I${linuxHeaders}/include''
    #"--enable-sdl-video"
    #"--enable-sdl-audio"
    #"--disable-vosf"
    #"--disable-jit-compiler"
    #"--enable-jit-compiler"
    #"--prefix=$out"
  ];

  hardeningDisable = [ "all" ];

  src = fetchFromGitHub {
    owner = "cebix";
    repo = "macemu";
    rev = "143b0827dd1863a9ed9c7af3d2702b18e0fead07";
    sha256 = "1km16nm29nj854ngliwdshz8xk0n5i7767j2fykzsiq5havqav6j";
  };
}
