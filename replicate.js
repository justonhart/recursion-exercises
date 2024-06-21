/**
 * Goal: write a function that accepts a value and a number N, and returns an array containing the value N times.
 */
function replicate(value, repititions) {
	if(repititions <= 0) return []
	return [value].concat(replicate(value, repititions - 1));
}

console.log(`replicate(5, 4): ${replicate(5, 4)}`);
console.log(`replicate('|', 15): ${replicate('|', 15)}`);
