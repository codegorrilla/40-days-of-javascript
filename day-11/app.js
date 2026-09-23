// closure is an inner function which can remember the variable of its outer function even after the outer function has executed.

// a closure allows a function to access its variable from its outer function even after the outer function has executed

console.log("Day11- closure");

// function outer() {
// 	let x = 10;

// 	function inner() {
// 		console.log(x);
// 	}

// 	inner();
// }

// const func = outer();

// //console.log(func());

// function outerCount() {
// 	let count = 0;

// 	return function innerCount() {
// 		count++;
// 		console.log(count);
// 	};
// }

// const retVal = outerCount();

// retVal();
// retVal();
// retVal();

// Real world example

// function createBankAccount(initialBalance) {
// 	let balance = initialBalance;

// 	return {
// 		deposit: (amount) => {
// 			balance = balance + amount;
// 			console.log(`Deposited: ${amount} INR, Current balance: ${balance} INR`);
// 		},

// 		withdraw: (amount) => {
// 			if (amount > balance) {
// 				console.warn("Insufficient fund");
// 				return;
// 			}

// 			balance = balance - amount;
// 			console.log(`Withdrawn: ${amount} INR, Current balance: ${balance} INR`);
// 		},

// 		checkBalance: () => console.log("Current balance", balance),
// 	};
// }

// const codegorrillaAccount = createBankAccount(500);

// console.log(codegorrillaAccount);

// console.log(codegorrillaAccount.deposit(1000)); //1500 INR

// console.log(codegorrillaAccount.withdraw(300)); // 1700 INR
// console.log(codegorrillaAccount.checkBalance());
// console.log(codegorrillaAccount.checkBalance());

// dont use closure when you're dealing with big data , it leads to memory overload
const dealingWithBigData = () => {
	let bigData = new Array(10000).fill("*");

	return function () {
		console.log(bigData[3]);
	};
};

const variable12 = dealingWithBigData();

console.log(variable12());

// **Usefullness of closures**
// 1. You can keep the variables private without exposing them.
// 2. You can stop variable pollution.
// 3. You can create a function factory.
// 4. You can keep a variable alive between multiple calls.

const timer = () => {
	let secs = 0;

	return function () {
		secs++;
		console.log("elapsed seconds", secs);
	};
};

const timerInstance = timer();

timerInstance();
timerInstance();
timerInstance();

// closure with event listener
const clickCountBtn = () => {
	let clickCount = 0;

	document.getElementById("myButton").addEventListener("click", () => {
		clickCount++;
		console.log("Button has been clicked " + clickCount + " times");
	});
};

clickCountBtn();
