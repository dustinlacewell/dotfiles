{ stdenv, fetchgit, autoconf, automake, file, gcc49, gtk2, libX11, perl,
  pkgconfig, SDL }:

stdenv.mkDerivation {
  name = "SheepShaver-2.3-git";

  src = fetchgit {
    url = https://github.com/cebix/macemu.git;
    rev = "4671258ba36cac1a19545b5f666916a30cd91581";
    sha256 = "13dg6ds7ipvkb5cwb52ax3j70q96bali85mxq9j3rybnfpwvnabf";
  };

  NIX_CFLAGS_COMPILE = "-DSTDC_HEADERS=1";

  # Have to use gcc in order to avoid a known SheepShaver+SDL
  # segfault.
  buildInputs =
    [ autoconf automake file gcc49 gtk2 libX11 perl pkgconfig SDL ];

  preConfigure =
    ''
      substituteInPlace SheepShaver/src/Unix/configure.ac \
        --replace "/usr/bin/file" "${file}/bin/file"
      cd SheepShaver/src/Unix \
        && aclocal -I `aclocal --print-ac-dir` -I m4 \
        && autoheader \
        && autoconf
    '';

  configureFlags =
    [ "--enable-sdl-audio"
      "--enable-sdl-video" ];

  meta = with stdenv.lib; {
    homepage = http://sheepshaver.cebix.net/;
    description = "Open source PowerMac (classic MacOS) emulator";
    longDescription =
      ''
        A MacOS run-time environment and PowerPC emulator for BeOS and
        Linux that allows you to run classic MacOS applications inside
        the BeOS/Linux multitasking environment.  You need a copy of
        MacOS and a PowerMac ROM image to use SheepShaver.
      '';
    license = licenses.gpl2;
    maintainers = with maintainers; [ malyn ];
    platforms = platforms.linux;
  };
}
