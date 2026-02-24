function getComputerChoice() {
	const random = Math.floor(Math.random() * 3);

	if (random === 0) {
		return "rock";
	} else if (random === 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

function getHumanChoice() {
	return prompt("rock, paper or scissors").toLowerCase();
}

function playGame() {

	let HumanScore = 0;
	let ComputerScore = 0;

	function playRound(HumanChoice, ComputerChoice) {

		if (HumanChoice === ComputerChoice) {
			console.log("DRAW! Try Again");
		}
		else if (
			(HumanChoice === "rock" && ComputerChoice === "scissors") ||
			(HumanChoice === "paper" && ComputerChoice === "rock") ||
			(HumanChoice === "scissors" && ComputerChoice === "paper")
		) {
			console.log(`YOU WIN!!! ${HumanChoice} beats ${ComputerChoice}`);
			HumanScore++;
		}
		else {
			console.log(`YOU LOSE! ${ComputerChoice} beats ${HumanChoice}`);
			ComputerScore++;
		}
	}

	for (let count = 0; count < 5; count++) {
		let humanSelection = getHumanChoice();
		let computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
	}

	if (HumanScore > ComputerScore) {
		console.log(`YOU WIN THE GAME! ${HumanScore} x ${ComputerScore}`);
	} else if (ComputerScore > HumanScore) {
		console.log(`YOU LOSE THE GAME! ${ComputerScore} x ${HumanScore}`);
	} else {
		console.log(`DRAW GAME! ${HumanScore} x ${ComputerScore}`);
	}
}

playGame();