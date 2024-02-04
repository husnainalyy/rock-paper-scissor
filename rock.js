let computerMove = '';
let result = '';
let playerMove = '';
let score = JSON.parse(localStorage.getItem('score'));
if (score === null) {
    score = {
        win: 0,
        lose: 0,
        tie: 0

    };
}
updateResult();
function computerTurn() {

    let move = Math.random() * 10;

    if (move <= 3.33) {
        computerMove = 'Paper';
    }
    else if (move > 3.33 && move <= 6.66) {
        computerMove = 'Scissor';
    }
    else if (move > 6.66 && move <= 10) {
        computerMove = 'Rock';
    }
    else {
        console.log('Something wrong occurs');
    }
    return computerMove;
}

function playGame(playerMovee) {
    const computerMove = computerTurn();
    playerMove = playerMovee;

    if (playerMove == 'Paper') {

        if (computerMove == 'Scissor') {
            result = 'You win';
        }
        else if (computerMove == 'Rock') {
            result = 'You lose';
        }
        else if (computerMove == 'Paper') {
            result = 'Match is tie';
        }
        else {
            console.log('Something wrong occurs');
        }

    }
    else if (playerMove == 'Scissor') {

        if (computerMove == 'Paper') {
            result = 'You win';
        }
        else if (computerMove == 'Rock') {
            result = 'You lose';
        }
        else if (computerMove == 'Scissor') {
            result = 'Match is tie';
        }
        else {
            console.log('Something wrong occurs');
        }

    }
    else if (playerMove == 'Rock') {

        if (computerMove == 'Scissor') {
            result = 'You win';
        }
        else if (computerMove == 'Paper') {
            result = 'You lose';
        }
        else if (computerMove == 'Rock') {
            result = 'Match is tie';
        }
        else {
            console.log('Something wrong occurs');
        }

    }
    else {
        console.log('Something wrong occur');
    }

    if (result == 'You win') {
        score.win += 1;
    }
    else if (result == 'You lose') {
        score.lose += 1;
    }
    else if (result == 'Match is tie') {
        score.tie += 1;
    }
    else {
        console.log("Something wrong occur")
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateResult();

   

}

function updateResult() {
    document.querySelector('#result').innerHTML = `${result}`;
    document.querySelector('#YourMoves').innerHTML = ` ${playerMove}`;
    document.querySelector('#ComputerMoves').innerHTML = ` ${computerMove}`;
    document.querySelector('#win').innerHTML = ` ${score.win}`;
    document.querySelector('#lose').innerHTML = ` ${score.lose}`;
    document.querySelector('#tie').innerHTML = ` ${score.tie}`;
}

