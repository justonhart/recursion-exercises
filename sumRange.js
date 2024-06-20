/**
 * Goal: Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
 */
function sumRange(number) {
	if (number < 1) return 0;
	return number + sumRange(number - 1);
}

console.log(sumRange(6));
