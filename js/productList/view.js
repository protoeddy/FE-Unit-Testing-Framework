'use strict';

define(['handlebars', 'common', 'css!style/productList/productList.css'], function(Handlebars, seach) {
    var view = function(){
        this.container = $('#container-product');
        this.seachDom = $('.containert-menu-seach');
    };

    view.prototype = {
        init: function(data) {
            this.show(data);
        },
        show: function(data) {
            var self = this;
            $.get('html/productList.html', function(tpl) {
                var html = Handlebars.compile(tpl);
                html = html(data);
                self.clean();
                self.container.html(html);
                seach.seach.event(data);
            });
        },
        clean: function() {
            this.container.empty();
        }
    };
    
    return view;
});