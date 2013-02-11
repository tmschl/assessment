var BakedGood = function(type, gluten) {
  this.type = type;
  this.gluten = gluten;
};

BakedGood.prototype.eat = function() {
    console.log('Your bakedgood is gone!');
  };

var Cookie = function() {
  this.flavor = 'Oatmeal';
};

Cookie.prototype = new BakedGood("cookie", false);

var cookie = new Cookie();

var Brownie = function() {
  this.flavor = 'Fudge';
};

Brownie.prototype = new BakedGood("Brownie", true);

var brownie = new Brownie();