/**
 * Goal: Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
 */
function all(arr, callback){
	return arr.reduce((current, next) => current && callback(next), true);
}

const arr = [1,2,3];
console.log(`arr: ${arr}`);

function isEven(number) {
	return (number % 2) === 0;
}

function isLessThanTen(number){
	return number < 10;
}

console.log(`all(arr, isEven): ${all(arr, isEven)}`);
console.log(`all(arr, isLessThanTen): ${all(arr, isLessThanTen)}`);
