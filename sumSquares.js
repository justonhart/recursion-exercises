/**
 * Goal: write a function that accepts a multi-dimensional array and returns the sum of the squares of the contained integers
 */
function sumSquares(val) {
	return !Array.isArray(val) 
		? typeof val == 'number'
			? val * val
			: 0
		: val.reduce((current, next) => current + sumSquares(next), 0);
}

let three = [1, 1, 1];
console.log(`three: ${three}`);
console.log(`sumSquares(three): ${sumSquares(three)}`);

let thirty = [[[5], 1], 0, 2, ['foo'], [], [0, [0, 0]]];
console.log(`thirty: ${thirty}`);
console.log(`sumSquares(thirty): ${sumSquares(thirty)}`);
