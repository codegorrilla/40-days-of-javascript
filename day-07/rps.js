// Rock, paper, scissor game =>
// Rock can break Scissors => so rock wins
// Paper can wrap rock => so paper wins
// Scissor can cut paper => so Scissor wins

function rockPaperScissorGame() {
	console.log("*** Getting started with the Rock, paper and Scissor game ***");

	const userPrompt = prompt("Enter Rock, Paper or Scissors");

	const userChoice = userPrompt.toLowerCase();
	let computerChoice;

	const randomNumber = Math.floor(Math.random() * 3) + 1; //range is between 1 and 3

	switch (randomNumber) {
		case 1:
			computerChoice = "rock";
			break;
		case 2:
			computerChoice = "paper";
			break;
		default:
			computerChoice = "scissors";
	}

	console.log("User selected", userChoice);
	console.log("Computer selected", computerChoice);

	if (
		(userChoice === "rock" && computerChoice === "scissors") ||
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissors" && computerChoice === "paper")
	) {
		console.log("You the user wins!!!");
	} else if (userChoice === computerChoice) {
		console.log("The game is a tie");
	} else if (
		(userChoice === "scissors" && computerChoice === "rock") ||
		(userChoice === "rock" && computerChoice === "paper") ||
		(userChoice === "paper" && computerChoice === "scissors")
	) {
		console.log("Oh ho... computer wins");
	} else {
		console.log("Please check the input, we did not understand it.");
	}

	const playAgainPrompt = prompt("Do you want to play again? (yes/no)");

	const playAgain =
		playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";

	if (playAgain === "yes") {
		rockPaperScissorGame();
	} else {
		console.log("Thanks for playing! See you next time.");
	}
}

//start this game
rockPaperScissorGame();
