// usr/bin/env node
/*
 * lib.swagger_ui.js (2018.8.11)
 * https://github.com/kaizhu256/node-swagger-ui-lite
 * this zero-dependency package will provide a rollup, single-script version of the swagger-ui client (v2.1.5), with a working web-demo
 *
 */



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



/* istanbul ignore next */
// run shared js-env code - init-before
(function () {
// init local
local = (
    globalThis.utility2_rollup
    // || globalThis.utility2_rollup_old
    // || require("./assets.utility2.rollup.js")
    || globalThis.globalLocal
);
// init exports
if (local.isBrowser) {
    globalThis.utility2_swagger_ui = local;
} else {
    // require builtins
    local.assert = require("assert");
    local.buffer = require("buffer");
    local.child_process = require("child_process");
    local.cluster = require("cluster");
    local.crypto = require("crypto");
    local.dgram = require("dgram");
    local.dns = require("dns");
    local.domain = require("domain");
    local.events = require("events");
    local.fs = require("fs");
    local.http = require("http");
    local.https = require("https");
    local.net = require("net");
    local.os = require("os");
    local.path = require("path");
    local.querystring = require("querystring");
    local.readline = require("readline");
    local.repl = require("repl");
    local.stream = require("stream");
    local.string_decoder = require("string_decoder");
    local.timers = require("timers");
    local.tls = require("tls");
    local.tty = require("tty");
    local.url = require("url");
    local.util = require("util");
    local.vm = require("vm");
    local.zlib = require("zlib");
    module.exports = local;
    module.exports.__dirname = __dirname;
}
// init lib main
local.local = local;
local.swagger_ui = local;



/* validateLineSortedReset */
return;
}());



// run node js-env code - init-after
/* istanbul ignore next */
(function () {
    if (local.isBrowser) {
        return;
    }
    // init assets
    local.assetsDict = local.assetsDict || {};
    local.fs.readdirSync(local.__dirname).forEach(function (file) {
        file = "/" + file;
        if (file.indexOf("/assets.") === 0) {
            local.assetsDict[file] = (
                local.assetsDict[file] || local.fs.readFileSync(local.__dirname + file, "utf8")
            );
        }
    });
    local.assetsDict["/assets.swagger_ui.html"] = (
        local.assetsDict["/assets.index.template.html"]
    );
}());



}());
