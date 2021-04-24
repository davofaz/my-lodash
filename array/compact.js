/*Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

Since
0.1.0

Arguments
array (Array): The array to compact.
Returns
(Array): Returns the new array of filtered values.

Example
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

*/
console.log ("compact");

function compactArray(array) {
    while(array.length) {
    return array.filter(Boolean)
    }
}

//var array = [0, 1, false, 2, '', 3];
//var results = compactArray(array);
//console.log(results)

module.exports = compactArray