'use strict';

define(['common', 'validate', 'css!style/register/register.css'], function(Model) {
    var view = function(pubsub) {
        this.pubsub = pubsub;
    };

    view.prototype = {
        init: function() {
            this.show();
            return true;
        },
        show: function() {
            var self = this;
            $.get('html/register.html', function(tpl) {
                $('#page').empty().append(tpl);
                self.event();
            });
        },
        event: function() {
          var self = this;
          $('.register-btn>input').on('click',function(){
              var username = $('.register-input.username').val().trim(),
              password = $('.register-input.password').val().trim();
              if(self.verify (username)){
                  self.pubsub.publish('register', {
                      user: username,
                      password: password
                  });
              }else {
                  alert('submit error,please check your message');
              }
          });
        },
        verify: function(username){
            if(Model.jsonFormat.jsonParse(localStorage.getItem('user'))[username] !== undefined) {
                alert('Username already exist');
                return false;
            } else {
                return this.validate().form();
            }
        },
        validate: function(){
            return $("#register").validate({
                        rules: {
                            username: {
                                required: true,
                                minlength: 2
                            },
                            password: {
                                required: true,
                                minlength: 5
                            },
                            email: {
                                required: true,
                                email: true
                            },
                            conEmail: {
                                equalTo: '#email'
                            },
                            conPassword: {
                                equalTo: '#password'
                            }
                        },
                        messages: {
                            username: {
                                required: 'Usename required',
                                minlength: 'Password must be at least 2 characters in length'
                            },
                            password: {
                                required: 'Password required',
                                minlength: 'Password must be at least 5 characters in length'
                            },
                            email: {
                                required: 'Email required',
                            },
                            conEmail: {
                                equalTo: 'It must be same to email'
                            },
                            conPassword: {
                                equalTo: 'It must be same to password'
                            }
                        },
                    });
        },
        submit:function(){
            var r = confirm('Register success, Sign in now?');
            if(r) {
                window.open('/#/login', '_self');
            } else {
                return;
            }
        }
    };

    return view;
});
