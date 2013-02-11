// Wheter or not a string starts with a given string
// Needs to take a string to look for and a string

var startsWith = function(string, subString) {
  var doesHave = false;
  var match = '';
  for(var i = 0; i < string.length; i++){
    if(string[i] === " "){
      break;
    };
    for(var t = 0; t < subString.length; t++){
      if(string[i] === subString[t]){
        match += subString[t];
      };      
    };
  };
  if(match === subString){
    doesHave = true;
  };
  return doesHave;
};

// Make the first letter of first word capital. All else lower case.

var titleize = function(string) {
  var pieces = string.split(" ");
  for ( var i = 0; i < pieces.length; i++ ){
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1);
  };
  return pieces.join(" ");
}