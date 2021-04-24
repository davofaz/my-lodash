const compactArray = require("./compact");
test("return array of filtered values - remove falsy values", () => {
    const arr = [0, 1, false, 2, '', 3];
    const filteredArray = compactArray(arr);
    expect(filteredArray).toEqual([1, 2, 3]);
});

test("return array of filtered values - remove falsy values", () => {
    const arr = ['a', 'b', false, 2,'', NaN, 3];
    const filteredArray = compactArray(arr);
    expect(filteredArray).toEqual(['a', 'b', 2, 3]);
});
