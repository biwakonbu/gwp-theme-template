#/bin/bash

DIR='sass|slim|node_modules'
FILES='package\.json|setup\.sh|README.md|.gitignore|theme.zip'
REMOVE="$DIR|$FILES"
RESULTS=`ls | egrep -v ${REMOVE}`

mkdir theme
for res in $RESULTS; do
    cp -R $res theme/$res
done

zip -r theme.zip theme
rm -rf theme
