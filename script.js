// console.log("hello");

function getComputerChoice()
{
    rand = Math.random();

    if (rand < 0.33)
        return "rock";
    else if (rand < 0.66)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice()
{
    input = prompt("Input you choice\n 1 - Rock\n 2 - Paper\n 3 - Scissors");

    if (input === '1' || input.toLowerCase() === 'rock')
        return "rock";
    else if (input === '2' || input.toLowerCase() === 'paper')
        return "paper";
    else if (input === '3' || input.toLowerCase() === 'scissors')
        return "scissors";

    return "invalid";
}

human_score = 0;
computer_score = 0;

function computerWon(h, c)
{
    console.log('You lose! ' + c + ' beats ' + h);
    computer_score++;
}

function playerWon(h, c)
{
    console.log('You win! ' + h + ' beats ' + c);
    human_score++;
}

function playRound(h, c)
{
    if (h === c)
        console.log("It's a draw!")
    else if (h === 'rock')
    {
        if (c === 'paper')
            computerWon(h, c);
        else if (c === 'scissors')
            playerWon(h, c);
    }
    else if (h === 'paper')
    {
        if (c === 'rock')
            playerWon(h, c);
        else if (c === 'scissors')
            computerWon(h, c);
    }
    else if (h === 'scissors')
    {
        if (c === 'rock')
            computerWon(h, c);
        else if (c === 'paper')
            playerWon(h, c);
    }
}

function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();
console.log('Player score: ' + human_score);
console.log('Computer score: ' + computer_score);

