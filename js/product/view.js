'use strict';

define(['handlebars', 'common', 'css!style/product/product.css'], function(Handlebars,seach){
    var view = function() {
        this.container = $('#container-product');
    };

    view.prototype = {
        init: function(data, datas) {
            this.show(data, datas);
        },
        show: function(data,datas) {
            var self = this;
            $.get('html/product.html', function(tpl) {
                var html = Handlebars.compile(tpl);
                html = html(data);
                self.clean();
                self.container.html(html);
                seach.seach.event(datas);
            });
        },
        clean: function(){
            this.container.empty();
        }
    };
    
    return view;
});