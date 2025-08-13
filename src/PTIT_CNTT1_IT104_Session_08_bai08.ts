const partialUpdate = <T>(obj: T, updates: Partial<T>): T => {
    return { ...obj, ...updates };
};
const original = { name: "Alice", age: 20, job: "Developer" };
const updated = partialUpdate(original, { age: 21 });
console.log(updated);