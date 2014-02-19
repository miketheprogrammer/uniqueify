var deepe = require('deep-equal');


var Uniqueify = module.exports = function uniqueify(array) {
  var seen = {};
  var obj_map = {}; // used for checking objects with deep equals
  var obj_arr = []; // used for checking objects with deep equals
  var result = [];

  for (var i = 0; i < array.length; i += 1) {
    if (seen[array[i]] === undefined && (typeof array[i] !== 'object')) {
      seen[array[i]] = array[i];
      result.push(array[i]);
    } else {
      if (typeof array[i] === 'object' ) {
        var found = false;
        for (var j = 0; j < obj_arr.length; j += 1) {
          if (deepe(array[i], obj_arr[j])) {
            found = true;
          }
        }
        if (!found) obj_arr.push(array[i]);
      }
    }
  }
  for (var i = 0; i < obj_arr.length; i += 1) {
    result.push(obj_arr[i]);
  }

  return result;
}