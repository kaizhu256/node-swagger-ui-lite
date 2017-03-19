/* istanbul instrument in package swagger_ui */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 8,
    maxlen: 96,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    var local;



    // run shared js-env code - pre-init
    /* istanbul ignore next */
    (function () {
        // init local
        local = {};
        // init modeJs
        local.modeJs = (function () {
            try {
                return typeof navigator.userAgent === 'string' &&
                    typeof document.querySelector('body') === 'object' &&
                    typeof XMLHttpRequest.prototype.open === 'function' &&
                    'browser';
            } catch (errorCaughtBrowser) {
                return module.exports &&
                    typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            }
        }());
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        switch (local.modeJs) {
        // re-init local from window.local
        case 'browser':
            local = local.global.utility2.objectSetDefault(
                local.global.utility2_rollup || local.global.local,
                local.global.utility2
            );
            break;
        // re-init local from example.js
        case 'node':
            local = (local.global.utility2_rollup || require('utility2'))
                .requireExampleJsFromReadme();
            break;
        }
        // export local
        local.global.local = local;
    }());



    // run shared js-env code - function
    (function () {
        return;
    }());
    switch (local.modeJs) {



    // run browser js-env code - function
    /* istanbul ignore next */
    case 'browser':
        break;



    // run node js-env code - function
    case 'node':
        local.testCase_buildApidoc_default = function (options, onError) {
        /*
         * this function will test buildApidoc's default handling-behavior-behavior
         */
            options = {};
            options.global = local.objectSetDefault({}, local.global);
            options.polyfill = function () {
                var $, Backbone, Handlebars, window;
                $ = Backbone = Handlebars = function (arg0) {
                    return arg0;
                };
                // jslint-hack
                $(Backbone, Handlebars, window);
                [
                    'Collection',
                    'Model',
                    'Router',
                    'View',
                    'extend',
                    'registerHelper',
                    'template'
                ].forEach(function (key) {
                    $[key] = $;
                });
                window = global;
            };
            // coverage-hack
            options.polyfill();
            local.vm.runInThisContext(local.jslintAndPrint(
/* jslint-ignore-begin */
'\
/*jslint\n\
    node: true\n\
*/\n\
"use strict";\n\
var $, Backbone, Handlebars, window;\n\
$ = Backbone = Handlebars = function (arg0) {\n\
    return arg0;\n\
};\n\
// jslint-hack\n\
$(Backbone, Handlebars, window);\n\
[\n\
    "Collection",\n\
    "Model",\n\
    "Router",\n\
    "View",\n\
    "extend",\n\
    "registerHelper",\n\
    "template"\n\
].forEach(function (key) {\n\
    $[key] = $;\n\
});\n\
window = global;\n\
', 'polyfill.js'
/* jslint-ignore-end */
            ) + local.fs.readFileSync('assets.swagger_ui.rollup.js', 'utf8')
                    .replace((/^\/\/ init lib [\S\s]*?\n\n\n\n/gm), function (match0) {
                    if (match0.indexOf('init lib swagger') < 0) {
                        return '';
                    }
                    return match0;
                })
                );
            options.exports = local.objectSetDefault({}, local.global);
            Object.keys(options.exports).forEach(function (key) {
                if (options.exports[key] === options.global[key]) {
                    delete options.exports[key];
                }
            });
            delete options.exports.$.Backbone;
            delete options.exports.$.Handlebars;
            delete options.exports.Backbone;
            delete options.exports.Handlebars;
            delete options.exports.$;
            options.moduleDict = {
                exampleFileList: ['assets.swagger_ui.rollup.js'],
                swagger_ui: { exports: options.exports }
            };
            local.buildApidoc(options, onError);
        };

        local.testCase_buildApp_default = function (options, onError) {
        /*
         * this function will test buildApp's default handling-behavior-behavior
         */
            local.testCase_buildReadme_default(options, local.onErrorThrow);
            local.testCase_buildLib_default(options, local.onErrorThrow);
            local.testCase_buildTest_default(options, local.onErrorThrow);
            local.assetsDict['/assets.app.js'] =
                local.fs.readFileSync('tmp/README.example.js', 'utf8');
            options = [{
                file: '/assets.swagger_ui.html',
                url: '/assets.swagger_ui.html'
            }, {
                file: '/assets.swagger_ui.petstore.json',
                url: '/assets.swagger_ui.petstore.json'
            }];
            local.buildApp(options, onError);
        };

        local.testCase_buildLib_default = function (options, onError) {
        /*
         * this function will test buildLib's default handling-behavior
         */
            options = {};
            options.customize = function () {
                // search-and-replace - customize dataTo
                [
                    // customize js\-env code
                    (/use strict[\S\s]*?\n\}\(\)\);\n/)
                ].forEach(function (rgx) {
                    options.dataFrom.replace(rgx, function (match0) {
                        options.dataTo = options.dataTo.replace(rgx, match0);
                    });
                });
            };
            local.buildLib(options, onError);
        };

        local.testCase_buildReadme_default = function (options, onError) {
        /*
         * this function will test buildReadme's default handling-behavior-behavior
         */
            options = {};
            options.customize = function () {
                // search-and-replace - customize dataTo
                [
                    // customize cdn-download
                    (/cdn download[\S\s]*?\n\n\n\n/),
                    // customize quickstart-header
                    (/run \w*? js\-env code[^`]*?switch/),
                    // customize quickstart-footer
                    (/init assets[^`]*?run the cli/)
                ].forEach(function (rgx) {
                    options.dataFrom.replace(rgx, function (match0) {
                        options.dataTo = options.dataTo.replace(rgx, match0);
                    });
                });
                options.dataTo = options.dataTo.replace(
                    'local.global.utility2_utility2',
                    'window.utility2'
                );
            };
            local.buildReadme(options, onError);
        };

        local.testCase_webpage_default = function (options, onError) {
        /*
         * this function will test webpage's default handling-behavior
         */
            onError(null, options);
        };
        break;
    }



    // run shared js-env code - post-init
    (function () {
        return;
    }());
    switch (local.modeJs) {



    // run browser js-env code - post-init
    /* istanbul ignore next */
    case 'browser':
        // run tests
        local.nop(local.modeTest &&
            document.querySelector('#testRunButton1') &&
            document.querySelector('#testRunButton1').click());
        break;



    // run node js-env code - post-init
    /* istanbul ignore next */
    case 'node':
        local.testCase_buildApidoc_default = local.testCase_buildApidoc_default || function (
            options,
            onError
        ) {
        /*
         * this function will test buildApidoc's default handling-behavior-behavior
         */
            options = { modulePathList: module.modulePathList };
            if (local.env.npm_package_buildNpmdoc) {
                local.buildNpmdoc(options, onError);
                return;
            }
            local.buildApidoc(options, onError);
        };

        local.testCase_buildApp_default = local.testCase_buildApp_default || function (
            options,
            onError
        ) {
        /*
         * this function will test buildApp's default handling-behavior-behavior
         */
            local.testCase_buildReadme_default(options, local.onErrorThrow);
            local.testCase_buildLib_default(options, local.onErrorThrow);
            local.testCase_buildTest_default(options, local.onErrorThrow);
            options = [];
            local.buildApp(options, onError);
        };

        local.testCase_buildLib_default = local.testCase_buildLib_default || function (
            options,
            onError
        ) {
        /*
         * this function will test buildLib's default handling-behavior
         */
            options = {};
            local.buildLib(options, onError);
        };

        local.testCase_buildReadme_default = local.testCase_buildReadme_default || function (
            options,
            onError
        ) {
        /*
         * this function will test buildReadme's default handling-behavior-behavior
         */
            if (local.env.npm_package_buildNpmdoc) {
                onError();
                return;
            }
            options = {};
            local.buildReadme(options, onError);
        };

        local.testCase_buildTest_default = local.testCase_buildTest_default || function (
            options,
            onError
        ) {
        /*
         * this function will test buildTest's default handling-behavior
         */
            options = {};
            local.buildTest(options, onError);
        };

        local.testCase_webpage_default = local.testCase_webpage_default || function (
            options,
            onError
        ) {
        /*
         * this function will test webpage's default handling-behavior
         */
            options = { modeCoverageMerge: true, url: local.serverLocalHost + '?modeTest=1' };
            local.browserTest(options, onError);
        };

        // run test-server
        local.testRunServer(local);
        break;
    }
}());
