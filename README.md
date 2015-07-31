swagger-ui-lite
===============
minimal npm installer for swagger-ui asset files with zero npm-dependencies

[![NPM](https://img.shields.io/npm/v/swagger-ui-lite.svg?style=flat-square)](https://www.npmjs.org/package/swagger-ui-lite)



# screen-capture
[![screen-capture](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.npmTest.slimerjs._2Ftmp_2Fapp_2Fswagger-ui.html.png)](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.npmTest.slimerjs._2Ftmp_2Fapp_2Fswagger-ui.html.png)



# build-status [![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-swagger-ui-lite.svg)](https://travis-ci.org/kaizhu256/node-swagger-ui-lite)

| git-branch : | [master](https://github.com/kaizhu256/node-swagger-ui-lite/tree/master) | [beta](https://github.com/kaizhu256/node-swagger-ui-lite/tree/beta) | [alpha](https://github.com/kaizhu256/node-swagger-ui-lite/tree/alpha)|
|--:|:--|:--|:--|
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



# quickstart
1. $ npm install swagger-ui-lite
2. $ cd ./node_modules/swagger-ui-lite
3. open ./swagger-ui.html in a browser
4. hack these files to suit your need
    - ./swagger-ui.html
    - ./swagger-ui.rollup.css
    - ./swagger-ui.rollup.js

#### output from phantomjs-lite
[![screen-capture](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.npmTest.slimerjs._2Ftmp_2Fapp_2Fswagger-ui.html.png)](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.npmTest.slimerjs._2Ftmp_2Fapp_2Fswagger-ui.html.png)



# npm-dependencies
- none



# package-listing
- swagger-tools files derived from https://github.com/apigee-127/swagger-tools
- swagger-ui files derived from http://petstore.swagger.io

[![screen-capture](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.gitLsTree.png)](https://github.com/kaizhu256/node-swagger-ui-lite)



# package.json
```json
{
    "author": "kai zhu <kaizhu256@gmail.com>",
    "description": "minimal npm installer for swagger-ui asset files \
with zero npm-dependencies",
    "devDependencies": {
        "phantomjs-lite": "^2015.7.1",
        "utility2": "^2015.7.10"
    },
    "keywords": [
        "api",
        "browser",
        "rollup",
        "schema", "swagger", "swagger-tools", "swagger-ui",
        "web"
    ],
    "license": "Apache 2.0",
    "name": "swagger-ui-lite",
    "repository": {
        "type": "git",
        "url": "https://github.com/kaizhu256/node-swagger-ui-lite.git"
    },
    "scripts": {
        "build-ci": "node_modules/.bin/utility2 shRun shReadmeBuild",
        "test": "node_modules/.bin/utility2 shRun shReadmeExportPackageJson"
    },
    "version": "2015.6.2"
}
```



# todo
- none



# change since 3df73348
- npm publish 2015.6.2
- update swagger-tools
- none



# changelog of last 50 commits
[![screen-capture](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.gitLog.png)](https://github.com/kaizhu256/node-swagger-ui-lite/commits)



# internal build-script
- build.sh

```shell
# build.sh

# this shell script will run the build for this package

shBuild() {
    # this function will run the main build
    # init env
    export npm_config_mode_slimerjs=1 || return $?
    . node_modules/.bin/utility2 && shInit || return $?

    # run npm-test on published package
    shRun shNpmTestPublished || return $?

    # run npm-test
    MODE_BUILD=npmTest shRunScreenCapture npm test || return $?

    # screen-capture swagger-ui.html
    shTmpAppCopy || return $?
    shPhantomScreenCapture \
        "file:///tmp/app/swagger-ui.html#\u0021/store/placeOrder" \
        30000 10000 || return $?
}
shBuild

# save exit-code
EXIT_CODE=$?

shBuildCleanup() {
    # this function will cleanup build-artifacts in local build dir
    # create package-listing
    MODE_BUILD=gitLsTree shRunScreenCapture shGitLsTree || return $?
    # create recent changelog of last 50 commits
    MODE_BUILD=gitLog shRunScreenCapture git log -50 --pretty="%ai\u000a%B" || \
        return $?
}
shBuildCleanup || exit $?

shBuildGithubUploadCleanup() {
    # this function will cleanup build-artifacts in local gh-pages repo
    return
}

# upload build-artifacts to github,
# and if number of commits > 16, then squash older commits
COMMIT_LIMIT=16 shBuildGithubUpload || exit $?

# exit with $EXIT_CODE
exit $EXIT_CODE
```
