'use strict';

define(['common'], function(Model) {
    var model = {
        getProduct: function(id) {
            var defer = $.Deferred(),self = this;
            Model.getProductList().then(function(data) {
                for(var i in data) {
                   self.filterFn(defer, data[i], id);
                }
            });
            return defer.promise(); 
        },
        filterFn: function(defer,data,id) {
            var filterData = $(data).filter(function(i, items) {
                if(items.id === id) {
                    return items;
                }
            });
            if(filterData.length !== 0){
                defer.resolve(filterData[0],data); 
                return; 
            }
        }
    };

    return model;
});