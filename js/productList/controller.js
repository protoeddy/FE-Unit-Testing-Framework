'use strict';

define(['js/productList/model', 'js/productList/view'], function(Model, View) {
    var controller = function() {

    };

    controller.prototype = {
        init:function() {
            Model.getProduct().done(function(data) {
                var view = new View();
                view.init(data);
            });
        }
    };
    
    var ctr = new controller();
    return ctr;
});