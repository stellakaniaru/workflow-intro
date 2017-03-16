// implement your solution here
function sum() {
	var i = 0,
		sum = 0;

	for (; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}