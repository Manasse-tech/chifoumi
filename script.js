function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "pierre";
    } else if (randomNumber === 1) {
        return "papier";
    } else {
        return "ciseaux";
    }
}

function getHumanChoice(choice) {
    return choice.trim().toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    const roundLimit = 5;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            return `Égalité ! Vous avez tous les deux choisi ${humanChoice}.`;
        }

        if (
            (humanChoice === "pierre" && computerChoice === "ciseaux") ||
            (humanChoice === "papier" && computerChoice === "pierre") ||
            (humanChoice === "ciseaux" && computerChoice === "papier")
        ) {
            humanScore++;
            return `Vous avez gagné ! ${humanChoice} bat ${computerChoice}.`;
        }

        computerScore++;
        return `Vous avez perdu ! ${computerChoice} bat ${humanChoice}.`;
    }

    const status = document.querySelector("#status");
    const score = document.querySelector("#score");
    const result = document.querySelector("#result");
    const choiceButtons = document.querySelectorAll("[data-choice]");

    function finishGame() {
        choiceButtons.forEach((button) => {
            button.disabled = true;
        });

        if (humanScore > computerScore) {
            result.textContent = "Vous avez gagné la partie !";
        } else if (computerScore > humanScore) {
            result.textContent = "L'ordinateur a gagné la partie !";
        } else {
            result.textContent = "La partie est à égalité !";
        }
    }

    choiceButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanChoice = getHumanChoice(button.dataset.choice);
            const computerChoice = getComputerChoice();
            status.textContent = playRound(humanChoice, computerChoice);
            console.log(status.textContent);
            roundsPlayed++;
            score.textContent = `Vous : ${humanScore} | Ordinateur : ${computerScore}`;

            if (roundsPlayed === roundLimit) {
                finishGame();
            } else {
                status.textContent += ` Manche ${roundsPlayed} sur ${roundLimit}. À vous de jouer.`;
            }
        });
    });
}

playGame();