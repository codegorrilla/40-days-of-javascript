console.log("Day 14: Error handling");

// two types of error
// 01. parsing error => without fixing it JS wont run basically syntactical error
// 02. run time error => errors created by certain conditions, core syntax is correct but the JS doesn't give expected output

// What is an exception in Javascript?
// Ans: Exceptions are run time errors that disrupt program execution.

// console.log(x); //ReferenceError: x is not defined

//let obj = null;
//console.log(obj.name); //TypeError: Can not read properties of null

//console.log('hi'; // Syntax error

// let arr = new Array(-1); //Range error

//decodeURIComponent('%'); //URI error

// eval("var a = ;") //Eval error, ignore it in JS

try {
	//logic or code
	console.log("execution starts here");
	abc;
	console.log("execution ends here");
} catch (err) {
	// handling the error object => err instance of error object
	console.error("An error has occured");
	// console.log(err.name);
	// console.log(err.message);
	// console.log(err.stack);
}

// Real world use cases
const divideNumber = (a, b) => {
	try {
		if (b === 0) {
			throw new Error("division by zero is not allowed");
		}

		const result = a / b;
		console.log(`The result is ${result}`);
	} catch (error) {
		console.error("got a Math error:", error.message);
	}
};

divideNumber(15, 3);
divideNumber(15, 0);

const person = {
	name: "Sanjib",
	address: {
		city: "Kolkata",
	},
};

const getPostalCode = (user) => {
	try {
		console.log(user.address.country.postalCode);
	} catch (error) {
		console.error("Error accessing property: ", error.message);
	}
};

getPostalCode(person);

const validateAge = (age) => {
	try {
		if (isNaN(age)) {
			throw new Error(
				`Invalid input: Age must be a number. Your input is ${age}`,
			);
		}

		console.log(`User's age is: ${age}`);
	} catch (error) {
		console.error("Validation error:", error.message);
	}
};

validateAge("30");

function validateForm(formData) {
	try {
		if (!formData.username) throw new Error("Username is manadatory");
		if (!formData.email.includes("@")) throw new Error("Invalid email format");
	} catch (error) {
		console.error("Validation issues", error.message);
		throw error; //rethrow
	}
}

try {
	validateForm({ username: "Sanjib", email: "bademail" });
} catch (error) {
	console.error("Showing error message for user creation", error.message);
}

//try-catch-finally
try {
	//code that may throw an error
} catch (error) {
} finally {
	//Code that always runs(cleanup actions)
}

function processInformation(information) {
	try {
		console.log("Processing information...");
		if (!information) throw new Error("No information available to process");
		console.log("information processed");
	} catch (error) {
		console.error("Error: ", error.message);
	} finally {
		console.log("Cleanup: closing database connection");
	}
}

processInformation();

//custom error
function ValidationError(message) {
	this.name = "ValidationError";
	this.message = message;
	this.stack = new Error().stack;
}

ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age) {
	if (age < 60) {
		throw new ValidationError(`You're not a senior citizen`);
	}

	console.log(`You're a senior citizen`);
}

try {
	const message = validateCitizen(60);
} catch (error) {
	console.error(`${error.name}: ${error.message}`);
}

//Self assignment operator=> currently not available in JS
