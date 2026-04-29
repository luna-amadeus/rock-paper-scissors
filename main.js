let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
const gameBtns = document.querySelectorAll(".gamebutton");
const gameLog = document.querySelector("#gamelog");
const scoreBox = document.querySelector("#score");
const gameResult = document.createElement("h4");
const choiceBox = document.querySelector("#choices");



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
const updateScore = () => {
    const oldScore = document.querySelector(".runningscore");
    const runningScore = document.createElement("p");
    runningScore.classList.add("runningscore");
    runningScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    oldScore.replaceWith(runningScore);
    
}

const playRound = (btnPressed) => {
    roundNumber ++;
    let computerChoice = getComputerChoice();
    let humanChoice = btnPressed;
    const roundResult = document.createElement("p");
    switch (true) {
        case (humanChoice === computerChoice) :
            computerScore += 0.5;
            humanScore += 0.5;
            roundResult.textContent = `Round ${roundNumber}: You chose ${humanChoice}, the computer chose ${computerChoice}. The game is a draw!`;
            break;
        case ( (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock") ) :
            computerScore ++;
            roundResult.textContent = `Round ${roundNumber}: You chose ${humanChoice}, the computer chose ${computerChoice}. You lose!`;
            break;
        case ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice ==="scissors" && computerChoice === "paper") ) :
            humanScore ++;
            roundResult.textContent = `Round ${roundNumber}: You chose ${humanChoice}, the computer chose ${computerChoice}. You win!`;
            break;
    }
    gameLog.appendChild(roundResult);
    updateScore();
    if (computerScore >= 5 || humanScore >= 5) {
        announceWin();
    }
}


const announceWin = () => {
     if (humanScore >= 5 && computerScore >= 5) {
        gameResult.textContent = `The game is a draw. You both had ${computerScore}.`;
        gameLog.appendChild(gameResult);
    } else if (computerScore >= 5) {
        gameResult.textContent = `The computer won the game. Better luck next time! You lost by ${computerScore - humanScore}.`;
        gameLog.appendChild(gameResult);
    } else if (humanScore >= 5) {
        gameResult.textContent = `You won the game! Congratulations!`;
        gameLog.appendChild(gameResult);
    }
    gameBtns.forEach(btn => {
        btn.style.display = "none";
    })
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again?";
    choiceBox.appendChild(playAgainBtn);
    playAgainBtn.addEventListener("click", (e) => {
        gameBtns.forEach(btn => {
            btn.style.display = "inline-block";
        });
        while (gameLog.firstChild) {
            gameLog.removeChild(gameLog.firstChild);
        };
        humanScore = 0;
        computerScore = 0;
        roundNumber = 0;
        updateScore();
        choiceBox.removeChild(playAgainBtn);
    })

}

gameBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        playRound(btn.id);
    });
});