#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# run our compile script, discussed above
node build.js

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "forgetthisbox@gmail.com"

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git init
git add .
git checkout master
git commit -a -m "Auto build #$TRAVIS_BUILD_NUMBER"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:master

