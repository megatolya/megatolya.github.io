#!/bin/bash
set -e
./node_modules/.bin/bower install
./node_modules/.bin/bower update

git config user.name "Travis CI"
git config user.email "forgetthisbox@gmail.com"

git init
git checkout master
node build.js
git add .
git commit -a -m "Auto build #$TRAVIS_BUILD_NUMBER" -m '[ci skip]'
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:master
