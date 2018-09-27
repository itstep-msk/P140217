function User(n, a) {
	this.name = n;
	this.age = a;
	this.displayInfo = function() {
		return "Name: " + this.name +  " Age:" + this.age;
	}
}

module.exports = User;