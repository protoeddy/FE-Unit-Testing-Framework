'use strict';

define(['common'], function(Model) {

    var model = {
        getProduct:function(id) {
            var defer = $.Deferred(),self = this;
            Model.getProductList().then(function(data) {
                for(var i in data) {
                    self.filterFn(defer, data[i], id);
                }
            });
            return defer.promise();
        },
        filterFn: function(defer,data,id) {
            $(data).filter(function(j, items) {
                $(items.productList).filter(function(k, item) {
                    if(item.sku === id) {
                        defer.resolve(item,data);
                        return item;
                    }
                });
            });
        },
    };

    return model;
});