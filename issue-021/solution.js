// implement your solution here
function oldAndYoung(students) {
	var obj = {},
		years = [],
		n ;
	for (var i in students) {
		years = years.concat(students[i].yearOfBirth);
		
		var studMax = years.reduce(function(a, b) {
			return Math.max(a, b);
		});
		var studMin = years.reduce(function(a, b) {
			return Math.min(a, b);
		});
		if (students[i].yearOfBirth == studMin) {
			obj['oldest'] = students[i].name;
		}
		if (students[i].yearOfBirth == studMax) {
			obj['youngest'] = students[i].name;
		}
	}
	return obj;
}



