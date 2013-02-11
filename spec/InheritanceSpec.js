describe("Inheritance", function(){
  var cookie;
  var brownie;

  beforeEach(function(){
    cookie = new Cookie();
    brownie = new Brownie();
  });

  describe("cookie", function() {

    it("should have a flavor", function() {
      expect(cookie.flavor).toBe("Oatmeal");
    });

    it("should delegate to BakedGood eat method", function() {
      spyOn(BakedGood.prototype, "eat");
      cookie.eat();
      expect(BakedGood.prototype.eat).toHaveBeenCalled();
    });
  });

  describe("brownie", function() {
    it("should be fudge flavored", function() {
      expect(brownie.flavor).toBe("Fudge");
    });

    it("should delegate to BakedGood eat method", function() {
      spyOn(BakedGood.prototype, "eat");
      brownie.eat();
      expect(BakedGood.prototype.eat).toHaveBeenCalled();
    });
  });

});