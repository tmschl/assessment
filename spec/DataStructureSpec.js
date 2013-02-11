describe("Array", function() {

  describe("last", function() {
    it("Should exist as a method on Array prototype", function(){
      var collection = []
      expect(collection.last).toEqual(jasmine.any(Function));
    });
    it("Should return last element of array", function() {
      var collection = [1,2,3];
      var nouns = ['what','are','they'];
      expect(collection.last()).toBe(3);
      expect(nouns.last()).toBe('they');

    });
  });

  describe("first", function() {
    it("should be a method on Array prototype", function() {
      var collection = [];
      expect(collection.last).toEqual(jasmine.any(Function));
    });

    it("should return the first element in array", function() {
      var thing = [1,2,3];
      var noun = ["person", "place", "thing"];
      expect(thing.first()).toBe(1);
      expect(noun.first()).toBe("person");
    });
  });

  describe("removeAtIndex", function() {
    it("should be a method on Array prototype", function() {
      var collection = [];
      expect(collection.removeAtIndex).toEqual(jasmine.any(Function));
    });
    it("should remove an element from given index", function() {
      var thing = [1,2,3];
      expect(thing.removeAtIndex(2)).toBe(2);
    });
  });

});

// Load both of these files to SpecRunner.html2