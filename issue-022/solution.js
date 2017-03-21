// implement your solution here
function objectValues(a) {
	var keys= [],
		values = [],
		len,
		k;
		
	for (k in a) {
	if (a.hasOwnProperty(k)) {
		keys.push(k);
		}
	}
	keys.sort();
	len = keys.length;
	for (i = 0; i < len; i++) {
		k = keys[i];
		values.push(a[k]);
	}
	return values;

}




