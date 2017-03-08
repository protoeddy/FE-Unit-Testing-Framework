'use strict';

define(['css!style/login/login.css'], function() {
    var view = function(pubsub) {
        this.pubsub = pubsub;
    };

    view.prototype = {
        init: function() {
            this.show();
        },
        show: function() {
            var self = this;
            $.get('html/login.html', function(tpl) {
                this.$content = $(tpl);
                $('#page').empty().append(this.$content);
                self.event();
            });
        },
        event: function() {
            var self = this;
            $('input[type="button"]').on('click', function() {
                self.login();
            });

            $("body").keydown(function(e) {
              var keycode = e.keyCode ? e.keyCode : e.which;
              if (keycode === 13) {
                  self.login();
              }
            });
        },
        login: function() {
            var username = $('.login-input.user').val().trim(),
            password = $('.login-input.password').val().trim();
            if(username && password) {
                this.pubsub.publish('login', {'user' : username,'password' : password});
                this.pubsub.publish('setCurrentUser', username);
            } else {
                alert('please input user and password');
            }

        },
        submit: function() {
            //$('#login').submit();
            window.open('/#/productList','_self');
        },
        error: function(){
            alert('Your username or password was incorrect');
        }
    };

    return view;
});
