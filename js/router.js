'use strict';
define(['director'], function(Router) {
    var pageRegister = {},
    page = ['login','productList','register','productItem','product'],
    getUrlFunction = function(page, i) {
        pageRegister[page[i]] = (function(i) {
            return  function(){
                var id = arguments[0];
                    require([page[i]], function(module) {
                       /* id ? module.init(id) : module.init();*/
                        if (id) {
                            module.init(id);
                        } else {
                            module.init();
                        }
                    });
                };
        })(i);
    };
    for(var i in page) {
        if(!(page[i] in pageRegister)) {
            getUrlFunction(page, i);
        }
    }
    return  Router({
                '/': pageRegister.login,
                '/login': pageRegister.login,
                '/productList': pageRegister.productList, 
                '/register': pageRegister.register, 
                '/productList/:proId': pageRegister.productItem,
                '/productList/procut/:proId': pageRegister.product
            });
});