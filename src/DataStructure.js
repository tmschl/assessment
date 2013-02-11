// A stack is something you can add to the top of and take off from the top.
// When you want the last thing you put away to be the first thing you get is when it should be used

// A queue goes by "first in first out"
// When you add things on each goes behind what was added before 

Array.prototype.last = function() {
  return this[this.length - 1];
};

Array.prototype.first = function(){
  return this[0];
};

Array.prototype.removeAtIndex = function(elementAt) {
  return this[elementAt - 1];
};