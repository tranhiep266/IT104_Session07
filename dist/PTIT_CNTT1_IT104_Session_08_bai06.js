"use strict";
const findElement = (arr, predicate) => {
    for (const element of arr) {
        if (predicate(element)) {
            return element;
        }
    }
    return undefined;
};
const foundElement = findElement([1, 2, 3, 4, 5], (x) => x === 3);
console.log(foundElement);
