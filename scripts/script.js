const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const hintText = document.querySelector(".hint-text b");

let currentWord, currentHint, correctLetters, wrongGuessCount;
const maxGuesses = 10;

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    hintText.innerText = "";
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
    const modalText = isVictory ? `Eltaláltad:` : "A helyes válasz:";
    gameModal.querySelector("img").src = `images/${isVictory ? "victory" : "lost"}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? "Gratulálok!" : "Game Over!";
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

        if (wrongGuessCount === 3) {
            hintText.innerText = currentHint;
        }
    }

    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
};

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

document.addEventListener("DOMContentLoaded", () => {
    const boardContainer = document.querySelector(".board");
    const resetBtn = document.querySelector(".reset-btn");
    const statusText = document.querySelector(".game-status");

    const boardSize = 5;
    const winCondition = 4; 
    let board = Array(boardSize * boardSize).fill("");
    let currentPlayer = "X";
    let gameActive = true;

    
    const createBoard = () => {
        boardContainer.innerHTML = "";
        board = Array(boardSize * boardSize).fill("");
        for (let i = 0; i < boardSize * boardSize; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("data-index", i);
            boardContainer.appendChild(cell);
        }
    };

    const checkWinner = () => {
        for (let row = 0; row < boardSize; row++) {
            for (let col = 0; col < boardSize; col++) {
                const index = row * boardSize + col;

                if (board[index] === "") continue;

                
                if (
                    col + winCondition <= boardSize &&
                    board[index] === board[index + 1] &&
                    board[index] === board[index + 2] &&
                    board[index] === board[index + 3]
                ) return true;

            
                if (
                    row + winCondition <= boardSize &&
                    board[index] === board[index + boardSize] &&
                    board[index] === board[index + 2 * boardSize] &&
                    board[index] === board[index + 3 * boardSize]
                ) return true;

            
                if (
                    col + winCondition <= boardSize &&
                    row + winCondition <= boardSize &&
                    board[index] === board[index + boardSize + 1] &&
                    board[index] === board[index + 2 * (boardSize + 1)] &&
                    board[index] === board[index + 3 * (boardSize + 1)]
                ) return true;

        
                if (
                    col - (winCondition - 1) >= 0 &&
                    row + winCondition <= boardSize &&
                    board[index] === board[index + boardSize - 1] &&
                    board[index] === board[index + 2 * (boardSize - 1)] &&
                    board[index] === board[index + 3 * (boardSize - 1)]
                ) return true;
            }
        }
        return false;
    };

    const handleCellClick = (e) => {
        const cell = e.target;
        const index = parseInt(cell.getAttribute("data-index"), 10);

        if (board[index] !== "" || !gameActive) return;

        board[index] = currentPlayer;
        cell.innerText = currentPlayer;
        cell.classList.add("taken");

        if (checkWinner()) {
            statusText.innerText = `Player ${currentPlayer} Wins!`;
            gameActive = false;
            return;
        }

        if (!board.includes("")) {
            statusText.innerText = "It's a Draw!";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.innerText = `Player ${currentPlayer}'s turn`;
    };

    const resetGame = () => {
        gameActive = true;
        currentPlayer = "X";
        statusText.innerText = `Player X's turn`;
        createBoard();
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
    };

    resetBtn.addEventListener("click", resetGame);

    createBoard();
    resetGame(); 
});
