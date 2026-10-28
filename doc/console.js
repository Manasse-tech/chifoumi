(() => {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    const roundLimit = 5;
    const choices = {
        1: "pierre",
        2: "ciseaux",
        3: "papier"
    };
    const choiceInput = document.querySelector("#choice");
    const hint = document.querySelector("#hint");

    function getComputerChoice() {
        const choiceNumbers = Object.keys(choices);
        return choices[choiceNumbers[Math.floor(Math.random() * choiceNumbers.length)]];
    }

    function playRound(choiceNumber) {
        if (roundsPlayed >= roundLimit) {
            return;
        }

        const humanChoice = choices[choiceNumber];
        if (!humanChoice) {
            console.log("Choix invalide. Tapez 1 pour pierre, 2 pour ciseaux ou 3 pour feuille.");
            hint.textContent = "Chiffre invalide : tapez 1, 2 ou 3.";
            return;
        }

        const computerChoice = getComputerChoice();
        let roundResult;

        if (humanChoice === computerChoice) {
            roundResult = `Égalité ! Vous avez tous les deux choisi ${humanChoice}.`;
        } else if (
            (humanChoice === "pierre" && computerChoice === "ciseaux") ||
            (humanChoice === "papier" && computerChoice === "pierre") ||
            (humanChoice === "ciseaux" && computerChoice === "papier")
        ) {
            humanScore++;
            roundResult = `Vous avez gagné ! ${humanChoice} bat ${computerChoice}.`;
        } else {
            computerScore++;
            roundResult = `Vous avez perdu ! ${computerChoice} bat ${humanChoice}.`;
        }

        roundsPlayed++;
        const roundMessage = `Manche ${roundsPlayed}/${roundLimit} — Vous : ${humanChoice} | Ordinateur : ${computerChoice}. ${roundResult}`;
        hint.textContent = roundsPlayed === roundLimit
            ? "Partie terminée. Consultez la console pour connaître le gagnant."
            : `Manche ${roundsPlayed} sur ${roundLimit} terminée. Tapez le prochain chiffre.`;
        console.log(roundMessage);
        console.log(`Score : vous ${humanScore} | ordinateur ${computerScore}`);

        if (roundsPlayed === roundLimit) {
            if (humanScore > computerScore) {
                console.log("Vous avez gagné la partie !");
            } else if (computerScore > humanScore) {
                console.log("L'ordinateur a gagné la partie !");
            } else {
                console.log("La partie est à égalité !");
            }
            choiceInput.disabled = true;
        }
    }

    choiceInput.addEventListener("input", () => {
        const choiceNumber = choiceInput.value;
        choiceInput.value = "";
        playRound(choiceNumber);
        choiceInput.focus();
    });

    console.log("Partie prête ! Tapez 1 pour pierre, 2 pour ciseaux ou 3 pour feuille dans le champ de la page.");
})();
