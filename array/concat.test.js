const concatArray = require("./concat");
test("return new array with concatenating array with any addition arrays, and/or values", () => {
    const arr1 = [1];
    const arr2 = [2, [3],[[4]]];
    const concatenatedArray = concatArray(arr1,arr2);
    expect(concatenatedArray).toEqual([1, 2, 3, [4]]);
});

test("return new array with concatenating array with any addition arrays, and/or values", () => {
    const arr1 = ["David"];
    const arr2 = [4, [6],[[3]], false];
    const concatenatedArray = concatArray(arr1,arr2);
    expect(concatenatedArray).toEqual(["David", 4, 6, [3], false]);
});

