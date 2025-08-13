const findElement = <T>(arr: T[], predicate: (element: T) => boolean): T | undefined => {
    for (const element of arr) {
        if (predicate(element)) {
            return element;
        }
    }
    return undefined;
};
const foundElement = findElement([1, 2, 3, 4, 5], (x) => x === 3);
console.log(foundElement);