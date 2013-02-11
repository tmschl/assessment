describe("BasicFunctions", function() {

  describe("startsWith", function(){
    it("should tell if a string start with a given string", function() {
      var test = startsWith('this is today', 'this');

      expect(test).toBe(true); 
    });
  });

  describe("titleize", function() {
    it("should capitalize all letters in a string", function() {    
      var fixme = titleize('make capital');
      var b = 'Make Capital';

      expect(fixme).toEqual(b);
    });
  });

});