const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

//Closure testing:
console.assert(closure([0,1,2,3,4], 5, '+') == 1);
console.assert(closure([0,1,2,3,4], 6, '+') == 0);
console.assert(closure([0,1,2,3], 6, '*') == 0);
console.assert(closure([0,1,3,7,9], 10, '*') == 1);
//Associativity testing:
console.assert(associativity([0,1,2,3,4], 5, '+') == 1);
console.assert(associativity([0,1,2,4], 8, '*') == 1);
//Identity testing:
console.assert(identity([0,1,2,3,4], 5, '+')[0] == 1);
console.assert(identity([1,2,3,4], 5, '+')[0] == 0);
console.assert(identity([0,2,3], 4, '*')[0] == 0);
console.assert(identity([0,1,5], 12, '*')[0] == 1);
//Inverses testing:
console.assert(inverses([0,1,2,3,4], 5, '+', 0) == 1);
console.assert(inverses([0,1], 2, '*', 1) == 0);
console.assert(inverses([0,1,2,6,4], 8, '*',1) == 0);
console.assert(inverses([1,3,5,7], 8, '*',1) == 1);
//Group testing:
console.assert(isGroup([0,1,2,3,4], 5, '+') == 1);
console.assert(isGroup([1,3,5,7], 8, '*') == 1);
console.assert(isGroup([1,2,3,4,5,6,7,8,9,10], 11, '*') == 1);
console.assert(isGroup([0,1,2,3], 4, '*') == 0);
console.assert(isGroup([1,3,4], 6, '+') == 0);