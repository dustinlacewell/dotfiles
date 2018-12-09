#!@shell@
echo $@
input=$(echo $@ | cut -d' ' -f1 )

if [ -z $input ]; then
    git hub repos @github_user@ | sort -n
else
    URL="https://github.com/@github_user@/$input"
    echo $URL | xsel -i
    xdg-open "$URL" > /dev/null
fi
