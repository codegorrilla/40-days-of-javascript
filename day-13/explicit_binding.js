// implicit binding
const myBanana = {
	type: "Yalaekki",
	color: "yellow",
	price: 165,
	"source-site": "bigbasket",
	orderNow: function () {
		return `${this.type} with ${this.color} order from ${this["source-site"]}`;
	},
};

console.log(myBanana["source-site"]);

const orderDesc = myBanana.orderNow();

console.log(orderDesc);

// explicit binding => call, apply , bind

// The call method
function greeting() {
	console.log(`${this.name} belongs to ${this.address}`);
}

const user = {
	name: "codegorrilla",
	address: "BG Road",
};

greeting.call(user);

const likes = function (hobby1, hobby2) {
	console.log(`${this.name} likes ${hobby1} and ${hobby2}`);
};

const person = {
	name: "Rishaan",
};

likes.call(person, "playing", "building");

// The apply method
const hobbiesToApply = ["Sleeping", "Watching Cartoon"];

likes.apply(person, hobbiesToApply);

// The bind method
const newFunction = function (hobby1, hobby2) {
	console.log(`${this.name} likes to ${hobby1} and ${hobby2}`);
};

const baishali = {
	name: "Baishali",
	address: "BG Road",
};

const newFn = newFunction.bind(baishali, "watch soaps", "singing");

newFn();

// constructor function
const Cartoon = function (name, animal) {
	this.name = name;
	this.animal = animal;
	this.log = function () {
		console.log(this.name + " is a " + this.animal);
	};
};

const tomCartoon = new Cartoon("tom", "cat");
const jerryCartoon = new Cartoon("jerry", "mouse");

tomCartoon.log();
jerryCartoon.log();
