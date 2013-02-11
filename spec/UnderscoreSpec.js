describe('Underscore', function() {

  describe('map', function() {
    it('should run a function on a list', function() {
      var bee = function(val) {
        return val + 1;
      };
      var honey = [1,2,3];
      expect(map(honey,bee)).toEqual([2,3,4]); 
    });
  });

  describe('filter', function() {
    it('take a list and return true expected values', function() {
      var list = [1,2,3,4,5,6];
      var even = function(val) {
        return val % 2 === 0;
      };
      expect(filter(list, even)).toEqual([2,4,6]);
    });
  });

});