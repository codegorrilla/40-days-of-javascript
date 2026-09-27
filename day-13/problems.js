//"use strict";
const rishaan = {
	name: "Rishaan",
	greet: function () {
		const inner = () => {
			console.log(`Hello ${this.name}!`);
		};

		inner();
	},
};

const greetFn = rishaan.greet();

greetFn;

const obj = {
	name: "Rishaan",
	greet: function () {
		console.log(`Hello ${this.name}!`);
	},
};

obj.name = "Baishali";

const baishaliFn = obj.greet;
console.log(baishaliFn);

baishaliFn.call(obj);

// const sanjib = {
// 	user: "Sanjib",
// 	greet: function () {
// 		return `Hello ${this.user}`;
// 	},
// };

// document.body.innerHTML = sanjib.greet();
