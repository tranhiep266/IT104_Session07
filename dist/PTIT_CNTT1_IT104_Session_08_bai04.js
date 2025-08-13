"use strict";
const merge04 = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
const mergedObject04 = merge04({ a: 1 }, { b: 2 });
console.log(mergedObject04);
