function loadSnakeGame() {

  const container = document.getElementById("gameContainer");
  container.innerHTML = "";

  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 400;
  canvas.style.background = "black";

  const ctx = canvas.getContext("2d");

  let snake = [{x:200,y:200}];
  let food = {x:100,y:100};
  let dx = 20;
  let dy = 0;
  let score = 0;

  document.addEventListener("keydown", changeDirection);

  function changeDirection(e) {
    if (e.key === "ArrowUp") { dx = 0; dy = -20; }
    if (e.key === "ArrowDown") { dx = 0; dy = 20; }
    if (e.key === "ArrowLeft") { dx = -20; dy = 0; }
    if (e.key === "ArrowRight") { dx = 20; dy = 0; }
  }

  function drawGame() {

    ctx.clearRect(0,0,400,400);

    snake.forEach(part => {
      ctx.fillStyle = "#2de2e6";
      ctx.fillRect(part.x, part.y, 20, 20);
    });

    ctx.fillStyle = "#9b4dff";
    ctx.fillRect(food.x, food.y, 20, 20);

    const head = {x: snake[0].x + dx, y: snake[0].y + dy};

    if (
      head.x < 0 || head.y < 0 ||
      head.x >= 400 || head.y >= 400 ||
      snake.some(part => part.x === head.x && part.y === head.y)
    ) {
      alert("Game Over! Score: " + score);
      clearInterval(gameInterval);
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score++;
      food = {
        x: Math.floor(Math.random()*20)*20,
        y: Math.floor(Math.random()*20)*20
      };
    } else {
      snake.pop();
    }
  }

  const gameInterval = setInterval(drawGame, 150);

  container.appendChild(canvas);

}


function goBack() {
    window.history.back();
}
