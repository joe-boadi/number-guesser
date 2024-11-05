let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (user_guess, computer_guess, secret_target) => {
    let user_win = true;

    if ( user_guess === secret_target || user_guess === computer_guess || computer_guess !== secret_target) {
        return user_win;
    } 
    if ( user_guess !== secret_target && computer_guess === secret_target ) {
        return !user_win;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') humanScore++
    if (winner === 'computer') computerScore++
}

const advanceRound = () => {
   return currentRoundNumber++
}