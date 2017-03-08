'use strict';

define(['register','js/register/model','js/register/view'], function(register, regModel, RegView) {
	var pubsub = $({});
	var view;
    pubsub.on('register', function(e, arg1, arg2) {
        if(regModel.register(arg1, arg2)){
           	view.submit();
        }
    });
   	view = new RegView(pubsub);
   	describe('Register Module: ', function() {
		it('controller->init', function() {
	 		expect(true).toBe(register.init()); 
		});
		it('view->init', function() {
	 		expect(true).toBe(view.init()); 
		});
		it('model->register', function() {
			expect(true).toBe(regModel.register('admin','admin'));
		});
		it('model->writeLocalStorage', function() {
			regModel.writeLocalStorage('testUserName','testPassword');
			var localUser = JSON.parse(localStorage.getItem('user'));
			expect('testPassword').toBe(localUser['testUserName']);
		});
	});
});