/* istanbul instrument in package swagger_ui */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 8,
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
        // init utility2_rollup
        local = local.global.utility2_rollup || local;
        // init lib
        local.local = local.swagger_ui = local;
        // init exports
        if (local.modeJs === 'browser') {
            local.global.utility2_swagger_ui = local;
        } else {
            // require builtins
            Object.keys(process.binding('natives')).forEach(function (key) {
                if (!local[key] && !(/\/|^_|^sys$/).test(key)) {
                    local[key] = require(key);
                }
            });
            module.exports = local;
            module.exports.__dirname = __dirname;
            module.exports.module = module;
        }
    }());
    switch (local.modeJs) {



    // run node js-env code - init-after
    /* istanbul ignore next */
    case 'node':
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
        break;
    }
}());
