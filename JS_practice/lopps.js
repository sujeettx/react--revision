let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Array.prototype.newProperty = "This is a new property";

for(let key in arr) {
    console.log(`Key: ${key}, Value: ${arr[key]}`);
}                       

const newMap  = new Map( [
    ['name','sujeet'],
    ['age', 22],
    ['city', 'Bhopal'],
    ['country', 'India'],
    ['hobby', 'coding'],
    ['isStudent', true]
]);


for(let [key, value] of newMap) {
    console.log(key, value);
}