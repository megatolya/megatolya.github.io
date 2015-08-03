#!/bin/bash
set -e # exit with nonzero exit code if anything fails
./node_modules/.bin/bower install

# run our compile script, discussed above

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "forgetthisbox@gmail.com"

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git init
git checkout master
node build.js
git add .
git commit -a -m "Auto build #$TRAVIS_BUILD_NUMBER" -m '[ci skip]'
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:master

