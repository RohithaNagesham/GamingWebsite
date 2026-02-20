function loadMemoryGame() {

  const container = document.getElementById("gameContainer");
  container.innerHTML = "";


  



  const symbols = ["🍕","🍕","🎮","🎮","🚀","🚀","🔥","🔥"];
  symbols.sort(() => 0.5 - Math.random());

  let flipped = [];
  let matched = 0;

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(4, 80px)";
  grid.style.gap = "10px";

  symbols.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.style.height = "80px";
    card.style.width = "80px";
    card.style.background = "rgba(255,255,255,0.1)";
    card.style.display = "flex";
    card.style.alignItems = "center";
    card.style.justifyContent = "center";
    card.style.fontSize = "2rem";
    card.style.cursor = "pointer";
    card.style.borderRadius = "10px";

    card.addEventListener("click", () => {

      if (flipped.length < 2 && card.innerText === "") {
        card.innerText = symbol;
        flipped.push({card, symbol});

        if (flipped.length === 2) {
          if (flipped[0].symbol === flipped[1].symbol) {
            matched++;
            flipped = [];
            if (matched === 4) {
              setTimeout(() => alert("You Win! 🎉"), 200);
            }
          } else {
            setTimeout(() => {
              flipped[0].card.innerText = "";
              flipped[1].card.innerText = "";
              flipped = [];
            }, 800);
          }
        }
      }

    });

    grid.appendChild(card);
  });

  container.appendChild(grid);
}



function goBack() {
    window.history.back();
}
