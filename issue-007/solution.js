// implement your solution here
function superSum(x) {
	var sum = 0;
	var y;

    for (var i=0; i < x.length; i++) {
    
    	y = String(x[i])
    
    	for (var j=0; j < y.length; j++){
    		sum += Number(y[j])
    	}	 
    }
    return sum;   
}
