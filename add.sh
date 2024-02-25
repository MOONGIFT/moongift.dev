#!/bin/bash

if [ -z "$1" ]
	then
		echo "No arguments supplied"
		exit 1
fi

name=$1

git flow feature start $name
git add .
git commit -m "Add $name"
git flow feature finish $name
npm run deploy
npm run push
