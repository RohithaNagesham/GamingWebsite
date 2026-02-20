// Future search filtering logic placeholder
console.log("Gamzy Loaded Successfully 🔥");



const params = new URLSearchParams(window.location.search);
const game = params.get("game");

const gameTitle = document.getElementById("gameTitle");
const guideText = document.getElementById("guideText");
const startBtn = document.getElementById("startGameBtn");
const guideModal = new bootstrap.Modal(document.getElementById("guideModal"));

if (game === "tictactoe") {
  gameTitle.innerText = "Tic Tac Toe";
  guideText.innerHTML = `
    1. Two players take turns.<br>
    2. Player X goes first.<br>
    3. Get 3 in a row to win.<br>
    4. If all boxes fill without winner, it's a draw.
  `;
  guideModal.show();

  startBtn.onclick = () => {
    guideModal.hide();
    loadTicTacToe();
  };
}



// MEMORY GAME
if (game === "memory") {
  gameTitle.innerText = "Memory Card Flip";
  guideText.innerHTML = `
    1. Flip two cards at a time.<br>
    2. Match identical symbols.<br>
    3. If they match, they stay open.<br>
    4. Match all pairs to win.
  `;
  guideModal.show();

  startBtn.onclick = () => {
    guideModal.hide();
    loadMemoryGame();
  };
}



// SLIDING PUZZLE
if (game === "sliding") {
  gameTitle.innerText = "Sliding Puzzle";
  guideText.innerHTML = `
    1. Arrange numbers in order.<br>
    2. Click tiles next to empty space.<br>
    3. Complete sequence 1–8 to win.
  `;
  guideModal.show();

  startBtn.onclick = () => {
    guideModal.hide();
    loadSlidingPuzzle();
  };
}



// WHACK A BOX
if (game === "whack") {
  gameTitle.innerText = "Whack a Box";
  guideText.innerHTML = `
    1. Click the glowing box.<br>
    2. You have 20 seconds.<br>
    3. Score increases for every hit.<br>
    4. Try to beat your high score!
  `;
  guideModal.show();

  startBtn.onclick = () => {
    guideModal.hide();
    loadWhackGame();
  };
}



// SNAKE GAME
if (game === "snake") {
  gameTitle.innerText = "Snake Game";
  guideText.innerHTML = `
    1. Use arrow keys to move.<br>
    2. Eat food to grow.<br>
    3. Don't hit walls or yourself.<br>
    4. Highest score wins!
  `;
  guideModal.show();

  startBtn.onclick = () => {
    guideModal.hide();
    loadSnakeGame();
  };
}



const searchBox = document.querySelector(".search-box");

if (searchBox) {
  searchBox.addEventListener("keyup", function() {
    const filter = searchBox.value.toLowerCase();
    const cards = document.querySelectorAll(".game-card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(filter) ? "" : "none";
    });
  });
}



 function goBack() {
    window.history.back();
}





console.log("Gamzy Fully Loaded 🔥");

