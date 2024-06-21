/**
 * Goal: write a function that accepts a multi-dimensional array and returns the total number of integers contained within
 */
function totalIntegers(val) {
	return !Array.isArray(val) 
		? Number.isInteger(val)
			? 1
			: 0
		: val.reduce((current, next) => current + totalIntegers(next), 0);
}

let simple = [1, 2, 3];
console.log(`simple: ${simple}`);
console.log(`totalIntegers(simple): ${totalIntegers(simple)}`);

let seven = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];
console.log(`seven: ${seven}`);
console.log(`totalIntegers(seven): ${totalIntegers(seven)}`);
