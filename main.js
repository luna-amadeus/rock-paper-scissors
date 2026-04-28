let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

const getHumanChoice = () => {
    let humanChoice = prompt("Please make your choice of Rock (r), Paper (p) or Scissors (s).", "r, p, s");
    switch (humanChoice.toLowerCase()) {
        case "r" :
            return "rock";
            break;
        case "p" :
            return "paper";
            break;
        case "s" :
            return "scissors";
            break;
         case "boob" :
            return "boob";
            break;
        default :
            console.log("Please make a valid choice.");
            return getHumanChoice();
            break;
    }
};

const playRound = () => {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    switch (true) {
         case (humanChoice === "boob") :
            humanScore = 69;
            return 'nice'
            break;
        case (humanChoice === computerChoice) :
            computerScore += 0.5;
            humanScore += 0.5;
            return `You chose ${humanChoice}, the computer chose ${computerChoice}. The game is a draw! Running total - You: ${humanScore}, Computer: ${computerScore}.`;
            break;
        case ( (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock") ) :
            computerScore ++;
            return `You chose ${humanChoice}, the computer chose ${computerChoice}. You lose! Running total - You: ${humanScore}, Computer: ${computerScore}.`;
            break;
        case ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice ==="scissors" && computerChoice === "paper") ) :
            humanScore ++;
            return `You chose ${humanChoice}, the computer chose ${computerChoice}. You win! Running total - You: ${humanScore}, Computer: ${computerScore}.`;
            break;
    }
}

const playGame = () => {
    for (let round = 1; round <= 5; round ++) {
        console.log(playRound());
        if (humanScore === 69) {
            break;
        }
    }
    if (computerScore > humanScore) {
        return `The computer won the game. Better luck next time! You lost by ${computerScore - humanScore}.`;
    } else if (humanScore > computerScore) {
        return `You won the game! Congratulations! You won by ${humanScore - computerScore}.`;
    } else {
        return `The game is a draw. You both had ${computerScore}.`;
    }
}

console.log(playGame());