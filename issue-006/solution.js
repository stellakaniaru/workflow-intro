// implement your solution here

function selectSum(x) {
	var sum = 0;

    for (var i=0; i < x.length; i++) {
    	if (typeof x[i] === 'number') {
    		sum += x[i];
    	} 
    }
    return sum;
} 



