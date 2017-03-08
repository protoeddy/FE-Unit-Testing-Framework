'use strict';

define(['common'], function(common) {
	describe('Common Module:', function() {
		it('common->jsonFormat',function(){
			var str1 = '{"name": "admin"}';
			var obj = {name:'admin'};
			expect(obj).toEqual(common.jsonFormat.jsonParse(str1));
		});
	});
});