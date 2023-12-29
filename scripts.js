const gameModule = (function () {
  const gameDisplay = document.querySelector(".game-display");
  const rules = document.querySelector(".rules");
  const submitButton = document.querySelector(".submit");
  const resetButton = document.querySelector(".reset");
  const form = document.querySelector("form");
  let rounds = 0;

  const updateRulesText = () => {
    return (rules.textContent = `The rules of this game are simple! You get five chances to guess a number
    from 1-100! You'll get some feedback if the number is lower or higher! Round ${rounds} of 5`);
  };
  const resetGame = () => {
    updateRulesText();
    gameDisplay.textContent = "";
    rounds = 0;
    computerChoice = generateNumber();
  };

  const generateNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  let computerChoice = generateNumber();

  const checkRounds = () => {
    if (rounds >= 5) {
      resetGame();

      gameDisplay.textContent = "Sorry you lose! Try again!";
    }
  };

  const updateDisplay = () => {
    const input = parseInt(document.getElementById("input").value);

    rounds += 1;

    rules.textContent = updateRulesText() + ` Your last guess was ${input}`;

    if (input < computerChoice) {
      gameDisplay.textContent =
        "Hmm... The number seems to be higher! Try again!";
    } else if (input > computerChoice) {
      gameDisplay.textContent =
        "Good guess! but the number is lower than that!";
    } else if (input === computerChoice) {
      resetGame();
      gameDisplay.textContent = "Woah! You got it! Good Try!";
    } else {
      resetGame();
      gameDisplay.textContent = `I'm sorry! An error occurred. The game will now reset.`;
    }

    checkRounds();
  };

  submitButton.addEventListener("click", (e) => {
    updateDisplay();
    e.preventDefault();
    form.reset();
  });

  resetButton.addEventListener("click", () => resetGame());
})();
