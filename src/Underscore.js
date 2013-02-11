// Describe each
// Each is a function that will run through an object and call an iterator on each object
// On each value of the object you are able to work with (value, key, list)

// Test Drive and implement _.map() and _.filter()
var map = function(list, iterator) {
  var expected = [];
  _.each(list, function(value) {
    expected.push(iterator(value));
  });
  return expected;
};

var filter = function(list, iterator) {
  var expected = [];
  _.each(list, function(value){
    if(iterator(value)){
      expected.push(value);
    }
  })
  return expected;
};