// Rock, Paper, Scissors Game

let PlayerScore = 0;
let ComputerScore = 0;

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("playerChoice").innerHTML = `${playerChoice}`;
    document.getElementById("computerChoice").innerHTML = `${computerChoice}`;

    if (playerChoice === computerChoice) {
        document.getElementById("result").innerHTML = "It's a tie!";
        document.getElementById("result").style.color = "black";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        document.getElementById("result").innerHTML = "You win!";
        document.getElementById("result").style.color = "green";
        PlayerScore = PlayerScore + 1;
        document.getElementById("playerScore").innerHTML = PlayerScore;
        
        
    } else {
        document.getElementById("result").innerHTML = "You lose!";
        document.getElementById("result").style.color = "red";
        ComputerScore = ComputerScore + 1;
        document.getElementById("computerScore").innerHTML = ComputerScore;
    }
}

// Example usage
playGame(''); // Replace "rock" with "paper" or "scissors" to test other cases
