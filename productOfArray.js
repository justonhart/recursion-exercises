/**
 * Goal: write a recursive function which takes in an array of numbers and returns their product
 */
function productOfArray(arr){
	if(!arr.length) return 1;
	return arr[0] * productOfArray(arr.slice(1, arr.length));
}

console.log(`productOfArray([1,2,3]): ${productOfArray([1,2,3])}`);
console.log(`productOfArray([1,1,1,1]): ${productOfArray([1,1,1,1])}`);
console.log(`productOfArray([0,1,1,1]): ${productOfArray([0,1,1,1])}`);
console.log(`productOfArray([2,2,2,2,2]): ${productOfArray([2,2,2,2,2])}`);
