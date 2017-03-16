// implement your solution here
function evenOdd(a) {
	var sumEven = a.reduce(function(x, i) {
		if (i % 2 === 0) {
			return x + i;	
		} else {
			return x;
		}
		},0);

	var sumOdd = a.reduce(function(x, i){
		if (i % 2 !== 0) {
			return x + i;	
		} else {
			return x;
		}
		},0);
	return sumEven - sumOdd;

}