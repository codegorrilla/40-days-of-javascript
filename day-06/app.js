// Callback functions

const toCallBuz = false;

function foo(func) {
	console.log("foo");

	if (toCallBuz) {
		func();
	}
}

const buzz = function () {
	console.log("buzz");
};

foo(buzz);

// Pure function => same input and outputs the same parameter
const greetingMsg = "Namaste "; // adding impurity => side effect
function greeting(name) {
	return greetingMsg + name;
}

console.log(greeting("Sanjib"));
console.log(greeting("Baishali"));
console.log(greeting("Rishaan"));

// Higher order function => H.O.F
function getCamera(camera) {
	camera();
}

getCamera(function () {
	console.log("Sony");
});

function returnFunc() {
	return function () {
		console.log("Hello");
	};
}

const retFunc = returnFunc();

console.log(retFunc);

retFunc();

// Arrow function

//IIFE (immediately invoked function expression)
(function (count) {
	console.log("IIFE", count);
})(1);

// Recursion
// you always have to think of how to get out of the recursive calls
// function foo() {
// 	foo();
// }

function fetchWater(count) {
	console.log("Fetching water...", count);

	if (count === 0) {
		//exit criteria
		console.log("No more water is left to fetch...");
		return;
	}

	fetchWater(count - 1);
}

fetchWater(5);
