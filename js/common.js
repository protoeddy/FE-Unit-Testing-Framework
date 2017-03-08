'use strict';

define(['handlebars'], function(Handlebars) {
    var model = {
        getProductList: function() {
            var self = this;
            var defer = $.Deferred();
            $.ajax({
                url: '/json/productList.json',
                type: 'get',
                dataType: "html",
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function(json) {
                    var data = self.jsonFormat.jsonParse(json);

                    $.get('html/container-menu.html', function(tpl) {
                        var html = Handlebars.compile(tpl);
                        html = html(data);
                        $('#page').html(html);
                        self.eventListen();
                        defer.resolve(data);
                    });

                },
                error: function(data) {
                    alert('The ajax is error');
                }
            });
            return defer.promise();
        },
        seach: {
            getHtml: function(data) {
                var self = this;
                if ($.isEmptyObject(data) === true) {
                    $('.containert-menu-box').empty().html('<span>Not Found</span>');
                    return;
                }
                $.get('html/seach.html', function(tpl) {
                    var html = Handlebars.compile(tpl);
                    html = html(data);
                    $('.containert-menu-box').empty().html(html);
                });
            },
            filterData: function(data, value) {
                var filter = {},
                    filterFn = function(filter,data){
                    $(data[j]).each(function(k, items) {
                        $(items.productList).each(function(i, item) {
                            if (item.name.toLowerCase().indexOf(value) !== -1) {
                                if (filter.hasOwnProperty("productList") === false) {
                                    filter.productList = [];
                                }
                                filter.productList.push(item);
                            }
                        });
                    });
                };
                for (var j in data) {
                    filterFn(filter,data);
                }
                return filter;
            },
            event: function(data) {
                var self = this;
                $('.containert-menu-seach').find('input').on('keyup', function() {
                    var text = $(this).val().trim().toLowerCase();
                    if (text !== '') {
                        var filterdata = self.filterData(data, text);
                        self.getHtml(filterdata);
                    } else {
                        self.getHtml({});
                    }
                });
            }
        },
        eventListen: function() {
            var user = localStorage.getItem('userNow');
            $('.user-center').html(user);
            $('#user-center').click(function(e) {
                $('#user-modal').toggleClass('hidden');
            });
            $('.login-out').click(function() {
                localStorage.removeItem('userNow');
            });
        },
        jsonFormat: {
            jsonParse: function(str) {
                var data;
                try {
                    data = JSON.parse(str);
                } catch(e) {
                   console.log(e + ' Unknow Error, String to JSON');
                }
                return data;
            },
            jsonStringify: function(json) {
                var data;
                try {
                    data = JSON.stringify(json);
                } catch(e) {
                   console.log(e + ' Unknow Error, JSON to String'); 
                }
                return data;
            } 
        }
    };

    return model;
});