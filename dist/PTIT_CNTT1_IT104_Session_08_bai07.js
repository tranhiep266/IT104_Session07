"use strict";
const flattenArray07 = (arr) => {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
};
const flattened = flattenArray07([[1, 2], [3, 4], [5]]);
console.log(flattened);
const flattenArray07Strings = flattenArray07([["a", "b"], ["c", "d"]]);
console.log(flattenArray07Strings);
