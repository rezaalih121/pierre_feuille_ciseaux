// rockPaperScissors.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const choices = ['pierre', 'feuille', 'ciseaux'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Égalité!';
    }
    if (
        (playerChoice === 'pierre' && computerChoice === 'ciseaux') ||
        (playerChoice === 'feuille' && computerChoice === 'pierre') ||
        (playerChoice === 'ciseaux' && computerChoice === 'feuille')
    ) {
        return 'Vous avez gagné!';
    }
    return 'Vous avez perdu!';
}

rl.question('Choisissez pierre, feuille ou ciseaux: ', (playerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    if (!choices.includes(playerChoice)) {
        console.log('Choix invalide. Veuillez choisir pierre, feuille ou ciseaux.');
    } else {
        const computerChoice = getComputerChoice();
        console.log(`L'ordinateur a choisi: ${computerChoice}`);
        console.log(determineWinner(playerChoice, computerChoice));
    }
    rl.close();
});

module.exports = { determineWinner };
