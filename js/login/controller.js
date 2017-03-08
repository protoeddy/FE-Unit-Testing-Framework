'use strict';

define(['js/login/view',
        'js/login/model',
        'pubsub'],
function(View, Model,Pubsub) {
    var controller = function() {
        var self = this;
        this.view = new View(
            new Pubsub(self).regist({
                login: self.login,
                setCurrentUser: self.setCurrentUser
            })
        );
    };
    controller.prototype = {
        init:function(){
            this.view.init();
            Model.getLocalStorage();
        },
        login: function(obj){
            var flag = true;
            var user = obj.user,
            password = obj.password,
            userDB;
            userDB = Model.getLocalStorage();
            if (userDB[user] !== password) {
                flag = false;
                this.view.error();
            }
            flag && this.view.submit();
        },
        setCurrentUser: function(username) {
            Model.userNow(username);
        }

    };
    var ctr = new controller();
    return ctr;
});
