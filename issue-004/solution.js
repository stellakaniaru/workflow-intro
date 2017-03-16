function grade(a) {
	if ((typeof a === 'number') && (a <= 100)){
	    if ((a >= 0) && (a <= 29.9)) {
			return 'F';
		} else if ((a >= 30) && (a <= 39.9)) {
			return 'E';
		} else if ((a >= 40) && (a <= 49.9)) {
			return 'D';
		} else if ((a >= 50) && (a <= 59.9)) {
			return 'C';
		} else if ((a >= 60) && (a <= 79.9)) {
			return 'B';
		} else if ((a >= 80) && (a <= 100)) {
			return 'A';
		}
	} else {
		return 'Invalid Grade!'
	}
}

