"use strict";
const reverseArray03 = (arr) => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
};
const reversedArray03 = reverseArray03([1, 2, 3, 4, 5]);
console.log(reversedArray03);
const reverseArray03Strings = reverseArray03(["a", "b", "c"]);
console.log(reverseArray03Strings);
