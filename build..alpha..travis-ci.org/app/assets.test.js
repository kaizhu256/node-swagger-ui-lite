/* istanbul instrument in package swagger_ui */
/* istanbul ignore next */
/* jslint utility2:true */
(function (globalThis) {
    "use strict";
    var consoleError;
    var local;
    // init globalThis
    (function () {
        try {
            globalThis = Function("return this")(); // jslint ignore:line
        } catch (ignore) {}
    }());
    globalThis.globalThis = globalThis;
    // init local
    local = {};
    // init isBrowser
    local.isBrowser = (
        typeof window === "object"
        && window === globalThis
        && typeof window.XMLHttpRequest === "function"
        && window.document
        && typeof window.document.querySelectorAll === "function"
    );
    globalThis.globalLocal = local;
    // init function
    local.assertThrow = function (passed, message) {
    /*
     * this function will throw the error <message> if <passed> is falsy
     */
        var error;
        if (passed) {
            return;
        }
        error = (
            // ternary-operator
            (
                message
                && typeof message.message === "string"
                && typeof message.stack === "string"
            )
            // if message is an error-object, then leave it as is
            ? message
            : new Error(
                typeof message === "string"
                // if message is a string, then leave it as is
                ? message
                // else JSON.stringify message
                : JSON.stringify(message, null, 4)
            )
        );
        throw error;
    };
    local.functionOrNop = function (fnc) {
    /*
     * this function will if <fnc> exists,
     * them return <fnc>,
     * else return <nop>
     */
        return fnc || local.nop;
    };
    local.identity = function (value) {
    /*
     * this function will return <value>
     */
        return value;
    };
    local.nop = function () {
    /*
     * this function will do nothing
     */
        return;
    };
    // init debug_inline
    if (!globalThis["debug\u0049nline"]) {
        consoleError = console.error;
        globalThis["debug\u0049nline"] = function () {
        /*
         * this function will both print <arguments> to stderr
         * and return <arguments>[0]
         */
            var argList;
            argList = Array.from(arguments); // jslint ignore:line
            // debug arguments
            globalThis["debug\u0049nlineArguments"] = argList;
            consoleError("\n\ndebug\u0049nline");
            consoleError.apply(console, argList);
            consoleError("\n");
            // return arg0 for inspection
            return argList[0];
        };
    }
}(this));



(function (local) {
"use strict";



// run shared js-env code - init-before
(function () {
// init local
local = (globalThis.utility2 || require("utility2")).requireReadme();
globalThis.local = local;
// init test
local.testRunDefault(local);
}());



// run shared js-env code - function
(function () {
    local.testCase_buildApidoc_default = function (options, onError) {
    /*
     * this function will test buildApidoc's default handling-behavior-behavior
     */
        if (local.isBrowser) {
            onError(null, options);
            return;
        }
        options = {};
        options.global = local.objectSetDefault({}, globalThis);
        options.polyfill = function () {
            var $;
            var Backbone;
            var Handlebars;
            var window;
            $ = function (value) {
            /*
             * this function will return <value>
             */
                return value;
            };
            Backbone = $;
            Handlebars = $;
            // jslint-hack
            $(Backbone, Handlebars, window);
            [
                "Collection",
                "Model",
                "Router",
                "View",
                "extend",
                "registerHelper",
                "template"
            ].forEach(function (key) {
                $[key] = $;
            });
            window = globalThis;
        };
        // coverage-hack
        options.polyfill();
        local.vm.runInThisContext(local.jslintAndPrint(
/* jslint ignore:start */
'\
/*jslint\n\
    node: true\n\
*/\n\
"use strict";\n\
var $;\n\
var Backbone;\n\
var Handlebars;\n\
var window;\n\
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
/* jslint ignore:end */
        ) + local.fs.readFileSync("assets.swagger_ui.rollup.js", "utf8")
        .replace((
            /^\/\/\u0020init\u0020lib\u0020[\S\s]*?\n\n\n\n/gm
        ), function (match0) {
            if (match0.indexOf("init lib swagger") < 0) {
                return "";
            }
            return match0;
        }));
        options.exports = local.objectSetDefault({}, globalThis);
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
            exampleFileList: ["assets.swagger_ui.rollup.js"],
            swagger_ui: {
                exports: options.exports
            }
        };
        local.buildApidoc(options, onError);
    };

    local.testCase_buildApp_default = function (options, onError) {
    /*
     * this function will test buildApp's default handling-behavior-behavior
     */
        if (local.isBrowser) {
            onError(null, options);
            return;
        }
        local.testCase_buildReadme_default(options, local.onErrorThrow);
        local.testCase_buildLib_default(options, local.onErrorThrow);
        local.testCase_buildTest_default(options, local.onErrorThrow);
        local.testCase_buildCustomOrg_default(options, local.onErrorThrow);
        options = {
            assetsList: [{
                file: "/assets.swagger_ui.html",
                url: "/assets.swagger_ui.html"
            }, {
                file: "/assets.swagger_ui.petstore.json",
                url: "/assets.swagger_ui.petstore.json"
            }, {
                file: "/assets.swagger_ui.rollup.js",
                url: "/assets.swagger_ui.rollup.js"
            }]
        };
        local.buildApp(options, onError);
    };
}());



}());
