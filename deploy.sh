#!/bin/bash
set -e
./node_modules/.bin/bower install
./node_modules/.bin/bower update

git config user.name "Travis CI"
git config user.email "travis@travis-ci.org"

git init
git checkout master
./node_modules/.bin/webpack -p --config .webpack.config.js
node build.js
git add .
git commit -a \
    -m "Travis build $TRAVIS_BUILD_NUMBER" \
    -m "https://travis-ci.org/megatolya/megatolya.github.io/builds/$TRAVIS_BUILD_ID" \
    -m "[ci skip]"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:master
