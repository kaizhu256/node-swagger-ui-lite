/* istanbul instrument in package swagger_ui */
/* jslint-utility2 */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 4,
    maxlen: 100,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    var local;



    // run shared js-env code - init-before
    (function () {
        // init local
        local = {};
        // init modeJs
        (function () {
            try {
                local.modeJs = typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            } catch (ignore) {
            }
            local.modeJs = local.modeJs || 'browser';
        }());
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        // re-init local
        local = local.global.local = (local.global.utility2 ||
            require('utility2')).requireReadme();
        // init test
        local.testRunInit(local);
    }());



    // run shared js-env code - function
    (function () {
        local.testCase_buildApidoc_default = function (options, onError) {
        /*
         * this function will test buildApidoc's default handling-behavior-behavior
         */
            if (local.modeJs !== 'node') {
                onError(null, options);
                return;
            }
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
            if (local.modeJs !== 'node') {
                onError(null, options);
                return;
            }
            local.testCase_buildReadme_default(options, local.onErrorThrow);
            local.testCase_buildLib_default(options, local.onErrorThrow);
            local.testCase_buildTest_default(options, local.onErrorThrow);
            local.testCase_buildCustomOrg_default(options, local.onErrorThrow);
            options = { assetsList: [{
                file: '/assets.swagger_ui.html',
                url: '/assets.swagger_ui.html'
            }, {
                file: '/assets.swagger_ui.petstore.json',
                url: '/assets.swagger_ui.petstore.json'
            }, {
                file: '/assets.swagger_ui.rollup.js',
                url: '/assets.swagger_ui.rollup.js'
            }] };
            local.buildApp(options, onError);
        };
    }());
}());
