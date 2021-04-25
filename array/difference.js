/*
Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.


_.difference([2, 1], [2, 3]);
// => [1]

*/

//console.log('Differnce')

function differenceArray(arr, exclude) {

    var difference = arr.filter(x => !exclude.includes(x));
    return difference

}


//var array1 = [2,4,1, false];
//var array2 = [2,3, false, ];

//console.log(differnceArray(array1, array2));

module.exports = differenceArray;