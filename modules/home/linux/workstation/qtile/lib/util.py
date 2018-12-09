import random
import string
import tempfile
import subprocess


def output(command):
    return subprocess.check_output(command, shell=True)


def call(command):
    return not subprocess.check_call(command, shell=True)


def random_string():
    choices = string.ascii_uppercase + string.ascii_lowercase + string.digits
    return ''.join(random.choice(choices) for _ in range(16))


def spotify(cmd):
    return "playerctl -p spotify {}".format(cmd)


def sh(command):
    filename = tempfile.NamedTemporaryFile(prefix="qtile-")
    finished = "twmn-msg -t \"Success\" -c \"{} finished\"".format(command)
    error = "twmn-err  -t \"Error\" -c \"{} failed\"".format(command)
    less = "less {}".format(filename.name)
    handler = "((PIPESTATUS[0])) && {} && {}".format(error, less)
    script = "{} >{} 2>&1 && {}; {}".format(command, filename.name, finished, handler)
    full = "urxvt -e bash -c '{}'".format(script)
    with open("/tmp/sh.sh", 'w') as fobj:
        fobj.write(full)
    return full


def copytext(text):
    # "primary":
    xsel_proc = subprocess.Popen(['xsel', '-pi'], stdin=subprocess.PIPE)
    xsel_proc.communicate(text)
    # "clipboard":
    xsel_proc = subprocess.Popen(['xsel', '-bi'], stdin=subprocess.PIPE)
    xsel_proc.communicate(text)
