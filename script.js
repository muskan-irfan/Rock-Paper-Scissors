// Get elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userScoreElem = document.getElementById('userScore');
const compScoreElem = document.getElementById('compScore');
const messageElem = document.getElementById('msg');
const msgbox = document.querySelector(".msgbox")

let userScore = 0;
let compScore = 0;

// Function to get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

// Function to play one round
function playRound(userChoice) {
    const compChoice = getComputerChoice();

    // Logic to determine winner
    if (userChoice === compChoice) {
        messageElem.textContent = `It's a tie! Both chose ${userChoice}`;
        
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        userScore++;
        userScoreElem.textContent = userScore;
        messageElem.textContent = `You win! ${userChoice} beats ${compChoice}`;
        msgbox.style.backgroundColor= "green"
    } else {
        compScore++;
        compScoreElem.textContent = compScore;
        messageElem.textContent = `You lose! ${compChoice} beats ${userChoice}`;
        msgbox.style.backgroundColor= "red"
    }
}

// Event listeners for user choices
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));
