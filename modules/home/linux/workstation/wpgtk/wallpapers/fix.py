import os
import pathlib
import shutil

for filename in os.listdir("."):
    if filename.endswith("!d"):
        shutil.move(filename, filename[:-2])
