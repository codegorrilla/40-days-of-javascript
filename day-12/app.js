console.log("Day-12 => Javascript Objects");

let user = {
	name: "Sanjib",
	age: 44,
	"is admin": true, // special character key
};

console.log(user.name); // 'Sanjib'

user.isSeniorCitizen = false;

console.log(user);
console.log(user["is admin"]); //subscript notation

user["movie lover"] = true;
console.log(user);

user.age = 34;

console.log(user.age);

// delete user["movie lover"];

// console.log(user);

// delete user.age;
// console.log(user);

const someKey = "age";

console.log(user[someKey]); // 34

// let car = prompt("which is your favouite car?");

// let favouriteCars = {
// 	[car]: 5,
// };

//console.log(favouriteCars);

// Constructor function
function Car(name, model) {
	this.name = name;
	this.model = model;
}

// class Car {
// 	constructor(name, model) {
// 		this.name = name;
// 		this.model = model;
// 	}

// 	myCar() {
// 		console.log(`I've a ${this.name} and the model is: ${this.model}`);
// 	}
// }

const bmwCar = new Car("BMW", "X1");
//console.log(bmwCar.myCar());

// Static methods

const target = { p: 1, a: 2 };
const source = { a: 3, b: 5 };

const returnedObj = Object.assign(target, source);
console.log(returnedObj);

const codeName = { name: "Codegorrilla" };
const nameObj = Object.assign({}, codeName);

console.log(nameObj === codeName);

const obj3 = {
	a: 1,
	b: { c: 2 },
};

const obj4 = Object.assign({}, obj3);
console.log(obj4);

obj4.b.c = 3;

console.log(obj4.b.c); // 3
console.log(obj3.b.c); // 3  // object assign method in JS work as shallow copy and changes both source and target for nested object only

// Structured cloning //deep cloning, nested objects in the source remains unchanged
const obj5 = structuredClone(obj3);

obj5.a = 100;
obj5.b.c = 30;

console.log(obj5);
console.log(obj3);

// Object.entries

const sanjibObj = {
	name: "Sanjib",
	role: "Full stack React coder",
};

const sanjibArr = Object.entries(sanjibObj);

console.log(sanjibArr);

// from entries
const entries = new Map([
	["foo", "bar"],
	["baz", 42],
]);

const objeArray = Object.fromEntries(entries);
console.log(objeArray);
