console.log("Optional chaining...");

// optional chaining
const employee = {
	salary: {
		bonus: 300,
	},
};

console.log(employee?.department?.name); // undefined
