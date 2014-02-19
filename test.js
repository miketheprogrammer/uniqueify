var test = require('tape');
var uniqueify = require('./index');

test("The values returned should be unique", function(t) {
  t.plan(1);

  var common_obj = {name: 'michael'};

  var result = uniqueify([1,2,2,3,3,4,5,common_obj,6,common_obj, 7,{name: 'michael'}, [1,2,3], 8, [1,2,3], 9, [1,2,3,'random']]);

  t.same(result, [1,2,3,4,5,6,7,8,9,{name:'michael'}, [1,2,3], [1,2,3,'random']]);
});