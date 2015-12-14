swagger-ui-lite
===============
minimal npm installer for swagger-ui asset files with zero npm-dependencies

[![NPM](https://img.shields.io/npm/v/swagger-ui-lite.svg?style=flat-square)](https://www.npmjs.org/package/swagger-ui-lite) [![NPM](https://img.shields.io/npm/dm/swagger-ui-lite.svg?style=flat-square)](https://www.npmjs.org/package/swagger-ui-lite)



# live test-server
[![heroku.com test-server](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.screenCapture.browser._2F_2Fhome_2Ftravis_2Fbuild_2Fkaizhu256_2Fnode-swagger-ui-lite_2Fswagger-ui.html.png)](https://kaizhu256.github.io/node-swagger-ui-lite/build..beta..travis-ci.org/swagger-ui.html)



# build-status [![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-swagger-ui-lite.svg)](https://travis-ci.org/kaizhu256/node-swagger-ui-lite)
[![build commit status](https://kaizhu256.github.io/node-swagger-ui-lite/build/build.badge.svg)](https://travis-ci.org/kaizhu256/node-swagger-ui-lite)

| git-branch : | [master](https://github.com/kaizhu256/node-swagger-ui-lite/tree/master) | [beta](https://github.com/kaizhu256/node-swagger-ui-lite/tree/beta) | [alpha](https://github.com/kaizhu256/node-swagger-ui-lite/tree/alpha)|
|--:|:--|:--|:--|
| test-server : | [![github.com test-server](https://kaizhu256.github.io/node-swagger-ui-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-swagger-ui-lite/build..master..travis-ci.org/swagger-ui.html) | [![github.com test-server](https://kaizhu256.github.io/node-swagger-ui-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-swagger-ui-lite/build..beta..travis-ci.org/swagger-ui.html) | [![github.com test-server](https://kaizhu256.github.io/node-swagger-ui-lite/GitHub-Mark-32px.png)](https://kaizhu256.github.io/node-swagger-ui-lite/build..alpha..travis-ci.org/swagger-ui.html)|
| build-artifacts : | [![build-artifacts](https://kaizhu256.github.io/node-swagger-ui-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-swagger-ui-lite/tree/gh-pages/build..master..travis-ci.org) | [![build-artifacts](https://kaizhu256.github.io/node-swagger-ui-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-swagger-ui-lite/tree/gh-pages/build..beta..travis-ci.org) | [![build-artifacts](https://kaizhu256.github.io/node-swagger-ui-lite/glyphicons_144_folder_open.png)](https://github.com/kaizhu256/node-swagger-ui-lite/tree/gh-pages/build..alpha..travis-ci.org)|

#### master branch
- stable branch
- HEAD should be tagged, npm-published package

#### beta branch
- semi-stable branch
- HEAD should be latest, npm-published package

#### alpha branch
- unstable branch
- HEAD is arbitrary
- commit history may be rewritten



# documentation
#### this package is derived from
- nedb @ 1.4.2
- swagger-tools @ 0.9.9
- swagger-ui @ 2.1.2



# quickstart
#### 1. $ npm install swagger-ui-lite

#### 2. $ cd ./node_modules/swagger-ui-lite

#### 3. open ./swagger-ui.html in a browser

#### 4. hack these files to suit your need
- ./swagger-ui.html
- ./swagger-ui.rollup.css
- ./swagger-ui.rollup.js

#### output from electron-lite
[![screen-capture](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.screenCapture.browser._2F_2Fhome_2Ftravis_2Fbuild_2Fkaizhu256_2Fnode-swagger-ui-lite_2Fswagger-ui.html.png)](https://kaizhu256.github.io/node-swagger-ui-lite/build..beta..travis-ci.org/swagger-ui.html)



# npm-dependencies
- none



# package-listing
[![screen-capture](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.gitLsTree.svg)](https://github.com/kaizhu256/node-swagger-ui-lite)



# package.json
```json
{
    "author": "kai zhu <kaizhu256@gmail.com>",
    "description": "minimal npm installer for swagger-ui asset files \
with zero npm-dependencies",
    "devDependencies": {
        "electron-lite": "2015.11.2",
        "utility2": "2015.11.16"
    },
    "keywords": [
        "api",
        "browser",
        "rollup",
        "schema", "swagger", "swagger-tools", "swagger-ui",
        "web"
    ],
    "license": "Apache-2.0",
    "name": "swagger-ui-lite",
    "repository": {
        "type": "git",
        "url": "https://github.com/kaizhu256/node-swagger-ui-lite.git"
    },
    "scripts": {
        "build-ci": "node_modules/.bin/utility2 shRun shReadmeBuild",
        "test": "MODE_LINENO=0 \
node_modules/.bin/utility2 shRun shReadmeExportFile package.json package.json && \
node_modules/.bin/utility2 test node test.js"
    },
    "version": "2015.11.7"
}
```



# todo
- none



# change since 75a60ff7
- npm publish 2015.11.7
- update to nedb @ 1.4.2 and inspected it to work standalone in both nodejs and browser
- none



# changelog of last 50 commits
[![screen-capture](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.gitLog.svg)](https://github.com/kaizhu256/node-swagger-ui-lite/commits)



# internal build-script
- build.sh

```shell
# build.sh

# this shell script will run the build for this package

shBuild() {
    # this function will run the main build
    # init env
    . node_modules/.bin/utility2 && shInit || return $?

    # run npm-test on published package
    shRun shNpmTestPublished || return $?

    # run npm-test
    MODE_BUILD=npmTest shRunScreenCapture npm test || return $?

    # screen-capture swagger-ui.html
    MODE_BUILD=screenCapture modeBrowserTest=screenCapture \
        url="file:///$PWD/swagger-ui.html#\u0021/store/placeOrder" shBrowserTest || return $?

    # deploy app to gh-pages
    git ls-tree --name-only -r HEAD | xargs tar -czf - | tar -C tmp/build -xzvf - || return $?
}
shBuild

# save exit-code
EXIT_CODE=$?
# create package-listing
MODE_BUILD=gitLsTree shRunScreenCapture shGitLsTree || exit $?
# create recent changelog of last 50 commits
MODE_BUILD=gitLog shRunScreenCapture git log -50 --pretty="%ai\u000a%B" || exit $?
# upload build-artifacts to github, and if number of commits > 16, then squash older commits
COMMIT_LIMIT=16 shBuildGithubUpload || exit $?
exit $EXIT_CODE

```
