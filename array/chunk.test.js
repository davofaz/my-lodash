const chunkArray = require("./chunk");
test("Splits array into chunks of 3", () => {
    const arr = ['a', 'b', 'c', 'd'];
    const chunkedArray = chunkArray(arr, 3);
    expect(chunkedArray).toEqual([['a', 'b', 'c'],['d']]);
});

test("Splits array into chunks of 2", () => {
    const arr = ['a', 'b', 'c', 'd'];
    const chunkedArray = chunkArray(arr, 2);
    expect(chunkedArray).toEqual([['a', 'b'], ['c','d']]);
});

