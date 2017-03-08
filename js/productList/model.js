'use strict';

define(['common'], function(Model) {
    var model = {
        getProduct:function() {
            var defer = $.Deferred();

            Model.getProductList().then(function(data) {
                return defer.resolve(data);
            });

            return defer.promise();
        }
    };
    
    return model;
});