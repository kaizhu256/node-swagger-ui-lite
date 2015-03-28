swagger-ui-lite [![NPM](https://img.shields.io/npm/v/swagger-ui-lite.svg?style=flat-square)](https://www.npmjs.org/package/swagger-ui-lite)
===============
minimal npm installer for swagger-ui asset files with zero npm dependencies



# build-status [![travis-ci.org build-status](https://api.travis-ci.org/kaizhu256/node-swagger-ui-lite.svg)](https://travis-ci.org/kaizhu256/node-swagger-ui-lite)
![screen-capture](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.npmTest.slimerjs._2Ftmp_2Fapp_2Fswagger-ui.html.png)



# quickstart
1. $ npm install swagger-ui-lite
2. $ cd ./node_modules/swagger-ui-lite
3. open ./swagger-ui.html in a browser
4. hack these files to suit your need
    - ./swagger-ui.html
    - ./swagger-ui.rollup.css
    - ./swagger-ui.rollup.js



# npm-dependencies
- none



# package-listing
[![screen-capture](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.gitLsTree.png)](https://github.com/kaizhu256/node-swagger-ui-lite)



# package.json
```
{
    "_packageJson": true,
    "author": "kai zhu <kaizhu256@gmail.com>",
    "description": "minimal npm installer for swagger-ui asset files \
with zero npm dependencies",
    "devDependencies": {
        "phantomjs-lite": "2015.3.24-11",
        "utility2": "2015.3.28-11"
    },
    "keywords": [
        "api",
        "browser",
        "json",
        "light", "lightweight", "lite",
        "rollup",
        "schema", "swagger", "swagger-ui",
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
        "test": "node_modules/.bin/utility2 shRun shReadmePackageJsonExport"
    },
    "version": "2.1.8-M1-2015-03-12-c"
}
```



# todo
    - none



# changelog of last 50 commits
[![screen-capture](https://kaizhu256.github.io/node-swagger-ui-lite/build/screen-capture.gitLog.png)](https://github.com/kaizhu256/node-swagger-ui-lite/commits)



# internal build-script
```
# build.sh
# this shell script will run the build for this package
shBuild() {
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

    # if number of commits > 512, then squash older commits
    shRun shGitBackupAndSquashAndPush 512 > /dev/null || return $?
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
COMMIT_LIMIT=16 shRun shBuildGithubUpload || exit $?

# exit with $EXIT_CODE
exit $EXIT_CODE
```
