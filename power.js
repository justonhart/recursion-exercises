/**
 * Goal: write a recursive power function which takes in a base and a natural exponent
 */
function power(base, exponent){
	if (exponent < 0) throw new Error();
	if (exponent === 0) return 1;
	return base * power(base, exponent - 1);
}

console.log(`power(2, 2): ${power(2, 2)}`);
console.log(`power(4, 4): ${power(4, 4)}`);
console.log(`power(7, 3): ${power(7, 3)}`);
console.log(`power(19, 1): ${power(19, 1)}`);
console.log(`power(256, 0): ${power(256, 0)}`);
