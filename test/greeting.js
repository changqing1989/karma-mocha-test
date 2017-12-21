describe('counter',function(){
	it("should say hi given a name",function(){
		sayHi("Tom").should.equal("Tom,hi");
	});
	

	it("should  not say hi  if not given a name",function(){
		sayHi().should.equal("nobody comes");
	});

	it("test",function(){
		test().should.equal("1");
	})
	
		
});