uniqueify
=========

Returns a array with only unique values. Otherwise known as a Set

[![browser support](https://ci.testling.com/miketheprogrammer/uniqueify.png)](https://ci.testling.com/miketheprogrammer/uniqueify)


npm install uniqueify


var uniqueify = require('uniqueify');

uniqueify(array);

// Example

test("The values returned should be unique", function(t) {
  t.plan(1);

  var common_obj = {name: 'michael'};

  var result = uniqueify([1,2,2,3,3,4,5,common_obj,6,common_obj, 7,{name: 'michael'}, [1,2,3], 8, [1,2,3], 9, [1,2,3,'random']]);

  t.same(result, [1,2,3,4,5,6,7,8,9,{name:'michael'}, [1,2,3], [1,2,3,'random']]);
});


** Note, objects are compared using deep equals. There is a bit of a performance hit when using objects and arrays but not much algorithmically at least. 

Objects are maintained in a seperate list and that list is iterated over to compare, it is then added at the end. So all objects appear at the end of the resulting Set.



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/miketheprogrammer/uniqueify/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

