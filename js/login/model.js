'use strict';

define([], function() {
    var DB = {
        admin: 'admin'
    },
    model = {
        getLocalStorage:function(){
            var user = localStorage.getItem('user');
            if(user){
                user = JSON.parse(user);
                DB = $.extend({},DB,user);
            }
            localStorage.setItem('user',JSON.stringify(DB));
            return DB;
        },
        userNow: function(username) {
            localStorage.setItem('userNow', username);
        }
    };
    return model;
});
