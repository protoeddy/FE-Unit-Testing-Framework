'use strict';

var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

requirejs.config({
    baseUrl: '/base',
    paths: {
        jquery      : 'js/lib/jquery.min',
        common      : 'js/common',
        director    : 'js/lib/director',
        router      : 'js/router',
        login       : 'js/login/controller',
        register    : 'js/register/controller',
        productList : 'js/productList/controller',
        productItem : 'js/productItem/controller',
        product     : 'js/product/controller',
        css         : 'js/lib/css.min',
        handlebars  : 'js/lib/handlebars-v4.0.5',
        validate    : 'js/lib/jquery.validate.min'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        }
    },
    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});

require(['router', 'jquery', 'css!style/main/main.css'], function(router, $) {
    window.$ = $;
    $.ajaxPrefilter(function(options, originalOptions, jqXHR){
        options.url = '/base/'+options.url;
    })
    router.init('/');
});
