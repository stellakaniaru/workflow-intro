
// implement your solution here
function sumEven(a) {
	var sum = a.reduce(function(x, i){
		if (i % 2 === 0) {
			return x + i;	
		} else {
			return x;
		}
		},0);
	return sum;
}


