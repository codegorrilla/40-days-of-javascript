"use strict";

console.log("Day 13: The this keyword");

// this keyword and window object => for JS for client-side/ browser , for node.js this refers to the global object
console.log("this is the global", this);

// inside of an object => implicit binding
const employee = {
	id: "A7060",
	firstName: "Alex",
	lastName: "B",

	returnThis: function () {
		return this;
	},

	getFullName: function () {
		return `${this.firstName} ${this.lastName}`;
	},
};

console.log("Emploee Id: ", employee.id);
console.log("this inside the employee object", employee.returnThis());
console.log("The employee full name: ", employee.getFullName());

const tom = {
	name: "tom",
	age: 7,
};

const jerry = {
	name: "jerry",
	age: 3,
};

function greetMe(object) {
	object.logMessage = function () {
		console.log(`${this.name} is ${this.age} years old.`);
		const bio = `${this.name} is ${this.age} years old.`;
		return bio.toUpperCase();
	};

	console.log(object);
}

greetMe(tom);
greetMe(jerry);

//document.body.innerHTML = tom.logMessage() + " and " + jerry.logMessage();

console.log(tom.logMessage() + " and " + jerry.logMessage());

// inside a function => standalone function

function sayName() {
	console.log("this inside a function", this);
}

sayName(); // this refers to the window object from the global scope

// nested function
function outer(a) {
	console.log("this inside an outer function", this);

	return function inner(b) {
		console.log("this inside an inner function", this);
	};
}

const outerResult = outer(5);
outerResult(3);

// inside an arrow function
const getFood = () => this;

console.log(
	"this inside the arrow function defined in global scope",
	getFood(),
); // points to window object from the global scope even in strict mode unlike standalone function expression

const food = {
	name: "Mango",
	color: "Yellow",
	// getDesc() {
	// 	return `${this.name} is ${this.color}`;
	// },
	// getDesc: function () {
	// 	return `${this.name} is ${this.color}`;
	// },
	getDesc: function () {
		//console.log(this);
		return `${this.name} is ${this.color}`;
	},
};

const descFunc = food.getDesc();
console.log(descFunc);
