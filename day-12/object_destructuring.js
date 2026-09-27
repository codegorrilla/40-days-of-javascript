const student = {
	name: "John Williamson",
	age: 9,
	std: 3,
	subjects: ["Maths", "English", "EVS"],
	parents: {
		father: "Brown Williamson",
		mother: "Sophia",
		email: "john-parents@abcde.com",
	},
	address: {
		street: "65/2, brooklyn road",
		city: "Carterton",
		country: "New Zealand",
		zip: 5791,
	},
};

// const name = student.name;
// const city = student.address.city;
// console.log(name, city);

const { name, age, std, meal = "bread" } = student;

// if we dont use destructuring, then we've to write -
//let meal = student.meal ? student.meal : "Bread";

// new variable with a dynamic value
const { subjects, numberOfSubjects = subjects.length } = student;

console.log(name, age, meal);

console.log(numberOfSubjects);

const { std: standard } = student; // aliases
console.log(standard);
//console.log(std);

const {
	address: { zip },
} = student;
console.log(zip);

//destructuring to the function parameters
function sendMail({ parents: { email } }) {
	console.log(`Send an email to ${email}`);
}

sendMail(student);

// object destructuring from a return statement of a function
const getStudent = () => {
	return {
		name: "John Williamson",
		age: 9,
		std: 3,
		subjects: ["Maths", "English", "EVS"],
		parents: {
			father: "Brown Williamson",
			mother: "Sophia",
			email: "john-parents@abcde.com",
		},
		address: {
			street: "65/2, brooklyn road",
			city: "Carterton",
			country: "New Zealand",
			zip: 5791,
		},
	};
};

// const anotherStudent = getStudent();
// const name1 = anotherStudent.name;
// const subjects1 = anotherStudent.subjects;

// console.log(name1, subjects1);

const { name: anotherName, subjects: anotherSubjects } = getStudent();
console.log(anotherName, anotherSubjects);

//object destructuring within the loop
const students = [
	{
		name: "William",
		grade: "A",
	},
	{
		name: "Tom",
		grade: "A+",
	},
	{
		name: "Bob",
		grade: "B",
	},
];

for (let { name, grade } of students) {
	console.log(name, grade);
}
