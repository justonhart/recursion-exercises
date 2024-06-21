/**
 * Goal: write a recursive function that searches for a value in a nested object. It returns true if the object contains that value.
 */
function contains(obj, val){
	if(typeof obj == 'object'){
		if(Object.values(obj).includes(val)) return true;
		return Object.values(obj).reduce((current, next) => current || contains(next, val), false);
	} else {
		return false;
	}
}

let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

console.log(`contains(nestedObject, 45): ${contains(nestedObject, 45)}`);
console.log(`contains(nestedObject, 'foo2'): ${contains(nestedObject, 'foo2')}`);
