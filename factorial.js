/**
 * Goal: write a recursive function that returns the factorial of the natural parameter
 */
function factorial(number) {
	if(number <= 1) return 1;
	return number * factorial(number - 1);
}

console.log(`factorial(3): ${factorial(3)}`);
console.log(`factorial(6): ${factorial(6)}`);
console.log(`factorial(99): ${factorial(99)}`);
