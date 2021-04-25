/*Creates a new array concatenating array with any additional arrays and/or values.

Since
4.0.0

Arguments
array (Array): The array to concatenate.
[values] (...*): The values to concatenate.
Returns
(Array): Returns the new concatenated array.

Example
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
*/
//console.log ('concat')
function concatArray(arr1,arr2) {

    //console.log("aray1: " + arr1);
    //console.log(arr1,...arr2)
    //return [].concat(arr1,arr2)
    return [].concat(...arr1,...arr2);


}

//var array = [1];
//var other = array.concat(2, [3], [[4]]);
//var other1 = [2, [3],[[4]]];
//var res = concatArray(array,other1);
//console.log(other);
//console.log("other1: " + other1)
//console.log(res);


module.exports = concatArray;