	
function product(a, b) {
	try {
		if ((typeof a !== 'number') || (typeof b !== 'number')) {
			throw new Error('NaN Exception');
		}
		else {
			return a * b;
		} 
	}
	catch(e) {
		throw e;
	}
	
}
	