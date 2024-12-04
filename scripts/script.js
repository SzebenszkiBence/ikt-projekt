const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const hintText = document.querySelector(".hint-text b");

let currentWord, currentHint, correctLetters, wrongGuessCount;
const maxGuesses = 10; // Növeltük 11 képre (0-10)

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    hintText.innerText = ""; // Tipp törlése
    wordDisplay.innerHTML = currentWord
        .split("")
        .map(() => `<li class="letter"></li>`)
        .join("");
    keyboardDiv.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
    gameModal.classList.remove("show");
};

const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    currentHint = hint;
    resetGame();
};

const gameOver = (isVictory) => {
    const modalText = isVictory ? `You found the word:` : "The correct word was:";
    gameModal.querySelector("img").src = `images/${isVictory ? "victory" : "lost"}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? "Congrats!" : "Game Over!";
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
};

const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;

        // Tipp megjelenítése 3 rossz találat után
        if (wrongGuessCount === 3) {
            hintText.innerText = currentHint;
        }
    }

    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
};

// Generálás az ékezetes karakterekhez
const generateKeyboard = () => {
    const letters = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";
    letters.split("").forEach((char) => {
        const button = document.createElement("button");
        button.innerText = char;
        keyboardDiv.appendChild(button);
        button.addEventListener("click", (e) => initGame(e.target, char));
    });
};

generateKeyboard();
getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);
