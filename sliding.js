function loadSlidingPuzzle() {

  const container = document.getElementById("gameContainer");
  container.innerHTML = "";

  let tiles = [1,2,3,4,5,6,7,8,""];
  tiles.sort(() => 0.5 - Math.random());

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(3, 100px)";
  grid.style.gap = "10px";

  function render() {
    grid.innerHTML = "";
    tiles.forEach((tile, index) => {
      const cell = document.createElement("div");
      cell.style.height = "100px";
      cell.style.display = "flex";
      cell.style.alignItems = "center";
      cell.style.justifyContent = "center";
      cell.style.background = tile ? "rgba(45,226,230,0.3)" : "transparent";
      cell.style.fontSize = "1.5rem";
      cell.style.cursor = "pointer";
      cell.style.borderRadius = "10px";

      cell.innerText = tile;

      cell.addEventListener("click", () => moveTile(index));
      grid.appendChild(cell);
    });
  }

  function moveTile(index) {
    const emptyIndex = tiles.indexOf("");
    const validMoves = [index-1,index+1,index-3,index+3];

    if (validMoves.includes(emptyIndex)) {
      [tiles[index], tiles[emptyIndex]] =
      [tiles[emptyIndex], tiles[index]];
      render();
      checkWin();
    }
  }

  function checkWin() {
    if (tiles.join("") === "12345678") {
      setTimeout(() => alert("Puzzle Completed! 🏆"), 200);
    }
  }

  render();
  container.appendChild(grid);
}