#!@shell@
if amixer -c 0 get Master | grep -q off
then
amixer set Master unmute
else
amixer set Master mute
fi
