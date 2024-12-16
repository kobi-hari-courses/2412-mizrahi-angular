console.log('Hello World');

var n = 50;
var b = true;
var s = 'Hello World';
var ar = [1, 2, 3];
var obj = { name: 'John', age: 25 };

function max(a, b) {
    return a > b ? a : b;
}

function Person(fullName) {
    var words = fullName.split(' ');

    this.firstName = words[0];
    this.lastName = words[1];
    this.location = 'Hod Hasharon';
}

Person.prototype.log = function() {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + this.location);
}

String.prototype.toUpperCase = function () {
    return 'Ha Ha Ha Ha';
}

String.prototype.reverse = function() {
    var letters =  this.split('');
    var flipped = letters.reverse();
    return flipped.join('');
}
