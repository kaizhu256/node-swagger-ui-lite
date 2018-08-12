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
    /* istanbul ignore next */
    (function () {
        // init debug_inline
        (function () {
            var consoleError, context, key;
            context = (typeof window === "object" && window) || global;
            key = "debug_inline".replace("_i", "I");
            if (context[key]) {
                return;
            }
            consoleError = console.error;
            context[key] = function (arg0) {
            /*
             * this function will both print arg0 to stderr and return it
             */
                // debug arguments
                context["_" + key + "Arguments"] = arguments;
                consoleError("\n\n" + key);
                consoleError.apply(console, arguments);
                consoleError("\n");
                // return arg0 for inspection
                return arg0;
            };
        }());
        // init local
        local = {};
        // init isBrowser
        local.isBrowser = typeof window === "object" &&
            typeof window.XMLHttpRequest === "function" &&
            window.document &&
            typeof window.document.querySelectorAll === "function";
        // init global
        local.global = local.isBrowser
            ? window
            : global;
        // re-init local
        local = local.global.utility2_rollup ||
            // local.global.utility2_rollup_old || require('./assets.utility2.rollup.js') ||
            local;
        // init nop
        local.nop = function () {
        /*
         * this function will do nothing
         */
            return;
        };
        // init exports
        if (local.isBrowser) {
            local.global.utility2_swagger_ui = local;
        } else {
            // require builtins
            // local.assert = require('assert');
            local.buffer = require('buffer');
            local.child_process = require('child_process');
            local.cluster = require('cluster');
            local.crypto = require('crypto');
            local.dgram = require('dgram');
            local.dns = require('dns');
            local.domain = require('domain');
            local.events = require('events');
            local.fs = require('fs');
            local.http = require('http');
            local.https = require('https');
            local.net = require('net');
            local.os = require('os');
            local.path = require('path');
            local.querystring = require('querystring');
            local.readline = require('readline');
            local.repl = require('repl');
            local.stream = require('stream');
            local.string_decoder = require('string_decoder');
            local.timers = require('timers');
            local.tls = require('tls');
            local.tty = require('tty');
            local.url = require('url');
            local.util = require('util');
            local.v8 = require('v8');
            local.vm = require('vm');
            local.zlib = require('zlib');
            module.exports = local;
            module.exports.__dirname = __dirname;
        }
        // init lib main
        local.local = local.swagger_ui = local;



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
            file = '/' + file;
            if (file.indexOf('/assets.') === 0) {
                local.assetsDict[file] = local.assetsDict[file] ||
                    local.fs.readFileSync(local.__dirname + file, 'utf8');
            }
        });
        local.assetsDict['/assets.swagger_ui.html'] =
            local.assetsDict['/assets.index.template.html'];
    }());
}());
