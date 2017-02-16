/* istanbul instrument in package swagger-ui-lite */
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
    (function () {
        // init local
        local = {};
        // init modeJs
        local.modeJs = 'node';
        // init global
        local.global = global;
        // export local
        local.global.local = local;
        switch (local.modeJs) {
        // re-init local from example.js
        case 'node':
            local = (local.global.utility2_rollup || require('utility2'))
                .requireExampleJsFromReadme();
            break;
        }
    }());
    switch (local.modeJs) {



    // run node js-env code - function
    case 'node':
        local.testCase_build_apiDoc = function (options, onError) {
        /*
         * this function will test build's apiDoc handling-behavior
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
                'swagger_ui': {
                    exampleFileList: ['assets.swagger_ui.rollup.js'],
                    exports: options.exports
                }
            };
            local.buildApiDoc(options, onError);
        };

        local.testCase_build_app = function (options, onError) {
        /*
         * this function will test build's app handling-behavior
         */
            local.assetsWrite(
                '/assets.app.js',
                local.fs.readFileSync('tmp/README.example.js', 'utf8')
            );
            options = [{
                file: '/assets.swagger_ui.html',
                url: '/assets.swagger_ui.html'
            }, {
                file: '/assets.swagger_ui.json',
                url: '/assets.swagger_ui.json'
            }];
            local.buildApp(options, onError);
        };

        local.testCase_build_readme = function (options, onError) {
        /*
         * this function will test build's readme handling-behavior
         */
            options = {};
            options.customize = function () {
                // search-and-replace - customize readmeTo
                [
                    // customize cdn-download
                    (/cdn download[\S\s]*?\n\n\n\n/),
                    // customize quickstart-header
                    (/run \w*? js-env code[^`]*?switch/),
                    // customize quickstart-footer
                    (/init assets[^`]*?run the cli/)
                ].forEach(function (rgx) {
                    options.readmeFrom.replace(rgx, function (match0) {
                        options.readmeTo = options.readmeTo.replace(rgx, match0);
                    });
                });
                options.readmeTo = options.readmeTo.replace(
                    'local.global.utility2_utility2',
                    'window.utility2'
                );
            };
            local.buildReadmeJslintLite(options, onError);
        };
        break;
    }
    switch (local.modeJs) {



    // run node js-env code - post-init
    case 'node':
        // run test-server
        local.testRunServer(local);
        break;
    }
}());
