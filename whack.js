function loadWhackGame() {

  const container = document.getElementById("gameContainer");
  container.innerHTML = "";

  let score = 0;
  let timeLeft = 20;

  const scoreText = document.createElement("h4");
  const timerText = document.createElement("h4");

  scoreText.innerText = "Score: 0";
  timerText.innerText = "Time: 20";

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(3, 100px)";
  grid.style.gap = "10px";
  grid.style.marginTop = "20px";

  let boxes = [];

  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.style.height = "100px";
    box.style.background = "rgba(255,255,255,0.1)";
    box.style.borderRadius = "10px";
    box.style.cursor = "pointer";
    boxes.push(box);
    grid.appendChild(box);
  }

  function randomGlow() {
    boxes.forEach(b => b.style.background = "rgba(255,255,255,0.1)");
    const random = Math.floor(Math.random() * 9);
    boxes[random].style.background = "#2de2e6";
    boxes[random].onclick = () => {
      score++;
      scoreText.innerText = "Score: " + score;
    };
  }

  const interval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(interval);
      clearInterval(timer);
      alert("Time Up! Final Score: " + score);
    }
    randomGlow();
  }, 800);

  const timer = setInterval(() => {
    timeLeft--;
    timerText.innerText = "Time: " + timeLeft;
  }, 1000);

  container.appendChild(scoreText);
  container.appendChild(timerText);
  container.appendChild(grid);
}