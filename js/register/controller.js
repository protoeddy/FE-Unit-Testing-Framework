'use strict';

define(['js/register/view',
        'js/register/model',
        'pubsub'
    ],
    function(View, Model, Pubsub) {
        var controller = function() {
            var self = this;
            this.view  = new View(
                new Pubsub(self).regist({
                    register: self.register
                }));
        };
        controller.prototype = {
            init: function() {
                this.view.init();
            },
            register: function(arg) {
                var self = this;
                Model.update(arg,function() {
                    self.view.submit();
                });
            }
        };
        var ctr = new controller();
        return ctr;
    });
