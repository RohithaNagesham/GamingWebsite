function loadTicTacToe() {

  const container = document.getElementById("gameContainer");
  container.innerHTML = "";

  const grid = document.createElement("div");
  grid.classList.add("ttt-grid");

  let currentPlayer = "X";
  let cells = Array(9).fill("");

  function checkWinner() {
    const winPatterns = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for (let pattern of winPatterns) {
      const [a,b,c] = pattern;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        setTimeout(() => alert(currentPlayer + " Wins!"), 100);
        return true;
      }
    }

    if (!cells.includes("")) {
      setTimeout(() => alert("It's a Draw!"), 100);
      return true;
    }

    return false;
  }

  cells.forEach((_, index) => {
    const cell = document.createElement("div");
    cell.classList.add("ttt-cell");

    cell.addEventListener("click", () => {
      if (!cells[index]) {
        cells[index] = currentPlayer;
        cell.innerText = currentPlayer;
        if (!checkWinner()) {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });

    grid.appendChild(cell);
  });

  container.appendChild(grid);

}


function goBack() {
    window.history.back();
}
