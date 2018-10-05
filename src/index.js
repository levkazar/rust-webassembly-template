(async () => {
  const { Universe, Cell } = await import("../pkg/game_of_rust");
  const { memory } = await import("../pkg/game_of_rust_bg");

  const CELL_SIZE = 5; // px
  const GRID_COLOR = "#CCCCCC";
  const DEAD_COLOR = "#FFFFFF";
  const ALIVE_COLOR = "#000000";

  const width = 150;
  const height = 150;

  let universe;
  let startStopButton;

  // Give the canvas room for all of our cells and a 1px border
  // around each of them.
  const canvas = document.getElementById("game-of-life-canvas");
  canvas.height = (CELL_SIZE + 1) * height + 1;
  canvas.width = (CELL_SIZE + 1) * width + 1;

  const ctx = canvas.getContext("2d");

  let isRunning = true;
  let renderTimestamp = 0;

  const renderLoop = ts => {
    // render timestamp is the same for requestAnimationFrame callbacks
    // that are called at the same frame. This gets rid of old async
    // callbacks after a restart.
    if (!isRunning || ts === renderTimestamp) return;

    renderTimestamp = ts;

    universe.tick();
    drawCells();

    requestAnimationFrame(renderLoop);
  };

  const drawGrid = () => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;

    // Vertical lines.
    for (let i = 0; i <= width; i++) {
      ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
      ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
    }

    // Horizontal lines.
    for (let j = 0; j <= height; j++) {
      ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
      ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
    }

    ctx.stroke();
  };

  function getRowColumn(index) {
    let column = index % width;
    let row = (index - column) / height;
    return { row, column };
  }

  const drawCells = () => {
    const cellsPtr = universe.cells();
    const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

    ctx.beginPath();

    cells.forEach((cell, index) => {
      let { row, column } = getRowColumn(index);

      ctx.fillStyle = cell === Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;

      ctx.fillRect(
        column * (CELL_SIZE + 1) + 1,
        row * (CELL_SIZE + 1) + 1,
        CELL_SIZE,
        CELL_SIZE
      );
    });

    ctx.stroke();
  };

  function restart() {
    stop();
    universe = Universe.new(width, height);
    drawGrid();
    start();
  }

  function start() {
    isRunning = true;
    startStopButton.innerHTML = "Stop";
    startStopButton.onclick = stop;
    requestAnimationFrame(renderLoop);
  }

  function stop() {
    isRunning = false;
    startStopButton.innerHTML = "Start";
    startStopButton.onclick = start;
  }

  function step() {
    stop();
    universe.tick();
    drawCells();
  }

  window.onload = () => {
    startStopButton = document.getElementById("startStopButton");
    document.getElementById("restartButton").onclick = restart;
    document.getElementById("stepButton").onclick = step;
    restart();
  };
})();
