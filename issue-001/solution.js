function dataTypeCheck(a) {
	if ((typeof a !== 'string') && (isNaN(a) === true)) {
		return 0;
	} else if ((typeof a === 'number') && (a % 1 === 0)) {
		return a / 2;
	} else if ((typeof a === 'number') && (a % 1 !== 0)) {
		return a * 2;
	} else if ((typeof a === 'string') && (isNaN(a) === false)) {
		return Number(a);
	} else if ((typeof a === 'string') && (isNaN(a))) {
		return 'hello ' + a;
	} else if ((typeof a !== 'string') && (isNaN(a) === false)) {
		return 0;
	} else if (typeof a === 'undefined') {
		return Number(false);
	} else if (a !== a) {
		return 0;
	} 
}
