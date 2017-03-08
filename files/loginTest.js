'use strict';

define(['login','js/login/model'], function(login,model) {
	describe('Login Module:', function() {
	 	it("controller->init", function() {
	 		expect(true).toEqual(login.init()); 
		});
		it('model->login',function(){
			var action = $.Deferred();
			action.resolve(expect(true).toEqual(model.login('admin','admin')));
			action.then(function(){
				console.log('model->login','The user and password are default setting.');
			});
		});
	 });
});