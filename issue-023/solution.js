// implement your solution here
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.walked = 0;

Person.prototype.walk = function(d) {
	this.walked += d;
	return this.walked;
};

Person.prototype.greet = function(obj) {
	name = obj.name;
	return "hello " + name;
};

