"use strict";
const array05 = (...elements) => {
    return elements;
};
const newArray05 = array05(1, 2, 3);
for (const element of newArray05) {
    let isEven = false;
    if (element % 2 === 0) {
        isEven = true;
        console.log(element);
    }
    else if (!isEven) {
        console.log(undefined);
    }
}
