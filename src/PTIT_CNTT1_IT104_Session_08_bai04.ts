const merge04 = <T,U>(obj1: T, obj2: U): T & U => {
    return { ...obj1, ...obj2 };
};
const mergedObject04 = merge04({ a: 1 }, { b: 2 });
console.log(mergedObject04);