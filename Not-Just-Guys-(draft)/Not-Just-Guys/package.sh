#!/bin/sh
VERSION=`grep '"version":' manifest.json | cut -d: -f 2 | tr -d "\"\,\ "`
zip -r "not-just-guys-$VERSION.zip" . -i@include.lst
