#/bin/bash

REMOVE='sass|slim|package\.json|setup\.sh|node_modules'
RESULTS=`ls | egrep -v ${REMOVE}`

mkdir temp
for res in $RESULTS; do
    cp -R $res temp/$res
done

zip -r theme.zip temp
rm -rf temp
