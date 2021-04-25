const differenceArray = require("./difference");
test("Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.", () => {
    const arr = [2,4,1, false];
    const ex = [2,3, false, ];
    const difArray = differenceArray(arr,ex);
    expect(difArray).toEqual([4,1]);
});

test("Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.", () => {
    const arr = ["david", 599, 699, true];
    const ex = [599, 699];
    const difArray = differenceArray(arr,ex);
    expect(difArray).toEqual(["david", true]);
});