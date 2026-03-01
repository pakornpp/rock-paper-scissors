export default class RockPaperScissors
{
    constructor()
    {
        this.mHumanScore = 0;
        this.mComputerScore = 0;
        this.mNumRounds = 0;
        this.mGameEnded = false;
    }


    getComputerChoice()
    {
        const rand = Math.random();

        if (rand < 0.33)
            return "rock";
        else if (rand < 0.66)
            return "paper";
        else
            return "scissors";
    }

    playRound(h, c)
    {
        if (h === c)
            console.log("It's a draw!")
        else if (h === 'rock')
        {
            if (c === 'paper')
                this.computerWon(h, c);
            else if (c === 'scissors')
                this.playerWon(h, c);
        }
        else if (h === 'paper')
        {
            if (c === 'rock')
                this.playerWon(h, c);
            else if (c === 'scissors')
                this.computerWon(h, c);
        }
        else if (h === 'scissors')
        {
            if (c === 'rock')
                this.computerWon(h, c);
            else if (c === 'paper')
                this.playerWon(h, c);
        }
    }

    computerWon(h, c)
    {
        console.log('You lose! ' + c + ' beats ' + h);
        this.mComputerScore++;
    }

    playerWon(h, c)
    {
        console.log('You win! ' + h + ' beats ' + c);
        this.mHumanScore++;
    }

    userClicked(event)
    {
        if (this.mNumRounds < 5)
        {
            const playerChoice = event.target.id; // Set to the button id

            this.playRound(playerChoice, this.getComputerChoice());

            const playerScore = document.querySelector('#player');
            const compScore = document.querySelector('#comp');

            playerScore.textContent = 'Player score: ' + this.mHumanScore;
            compScore.textContent = 'Computer score: ' + this.mComputerScore;
            this.mNumRounds++
        }
        else if (!this.mGameEnded)
        {
            this.mGameEnded = true;
            let msg = "It's a draw";
            if (this.mHumanScore > this.mComputerScore)
                msg = 'Player Won :)';
            else if (this.mHumanScore < this.mComputerScore)
                msg = 'Computer Won :(';
            alert(msg)
        }
    }

    start()
    {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => { button.addEventListener('click', this.userClicked.bind(this)) });
    }
}