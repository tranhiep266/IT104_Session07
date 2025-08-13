"use strict";
const partialUpdate = (obj, updates) => {
    return Object.assign(Object.assign({}, obj), updates);
};
const original = { name: "Alice", age: 20, job: "Developer" };
const updated = partialUpdate(original, { age: 21 });
console.log(updated);
