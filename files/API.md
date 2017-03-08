# Test cases are order by Controller - View - Model 
#toBe()
	It is same as '==='
	Example：
		expect(foo).toBe(true);
		expect(foo).not.toBe(true);
#toEqual()
	It is same as '=='
	Example：
		expect(foo).toEqual(true);
		expect(foo).not.toEqual(true);
#toBeTruthy()
	To determine whether it is true;
	Example：
		expect(foo).toBeTruthy();
    	expect(a).not.toBeTruthy();
#toBeFalsy()
	To determine whether it is false;
	Example：
		expect(foo).toBeFalsy();
    	expect(a).not.toBeFalsy();
#toBeDefined()
	Example：
		expect(foo).toBeDefined();
    	expect(a).not.toBeDefined();
#toBeUndefined()
	Example：
		expect(foo).toBeUndefined();
    	expect(a).not.toBeUndefined();
#toBeNull()
	Example：
		expect(foo).toBeNull();
    	expect(a).not.toBeNull();
#toBeLessThan()
	it is same as '<'
	Example：
		expect(foo).toBeLessThan();
    	expect(a).not.toBeLessThan();
#toBeGreaterThan()
	it is same as '>'
	Example：
		expect(foo).toBeGreaterThan();
    	expect(a).not.toBeGreaterThan();
#toContain()
	it("toContain and not.toContain", function(){
	 	var arrStr = ["Jack", "Tom", "Mary"];
	  	var arrObj = [{name:"Jack",age:21}, {name:"Tom",age:22}];

	  	expect(arrStr).toContain("Jack");
	  	expect(arrStr).not.toContain("jack");
	  
	  	expect(arrObj).toContain({name:"Jack",age:21});
	  	expect(arrObj).not.toContain({name:"jack",age:21});
	});
#toMatch()
	it("toMatch and not.toMatch", function(){
	    var str = "Michael Jackson";
	    
	    expect(str).toMatch(/michael/i);
	    expect(str).not.toMatch(/tom/i);
	})