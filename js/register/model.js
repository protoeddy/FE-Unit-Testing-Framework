'use strict';

define([], function() {
    var model = {
        update:function(obj,callback){
            var user = obj.user,
            password = obj.password;
            this.writeLocalStorage(user,password);
            callback && callback();
        },
        writeLocalStorage:function(user,password){
            var localUser = localStorage.getItem('user'),usernow ={};
            usernow[user] = password;
            localUser = JSON.parse(localUser);
            localUser = $.extend({},localUser,usernow);
            localUser = JSON.stringify(localUser);
            localStorage.setItem('user',localUser);
        }
    };
    return model;
});
