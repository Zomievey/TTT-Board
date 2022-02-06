let cells = document.querySelectorAll(".cell");
let resetButton = document.getElementById("simple");
let turnCounter = 0;
let winnerAlert = document.getElementById("winner");
let gameOver = turnCounter == 10;


let wins = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[0], cells[4], cells[8]],
  [cells[2], cells[4], cells[6]],
];

resetButton.addEventListener("click", function () {
  window.location.reload();
});

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(e) {
  if (turnCounter % 2 == 0) {
    e.target.textContent = "X";
  } else {
    e.target.textContent = "O";
  } if (e.target.textContent == "X" || e.target.textContent == "O") {
    e.target.removeEventListener("click", cellClicked);
  }

  turnCounter++;
  checkWin();
  checkDraw();
  endGame();
}


function checkWin() {
  for (let i = 0; i < wins.length; i++) {
    // looping over the wins array

    let xCount = 0;
    let oCount = 0;

    for (let j = 0; j < wins[i].length; j++) {
      // looping over each winning combo array inside wins array.

      if (wins[i][j].textContent == "X") {
        xCount++;
      } else if (wins[i][j].textContent == "O") {
        oCount++;
      }
    }

    if (xCount == 3) {
      setTimeout(function () {
        winnerAlert.textContent = "X Wins!";
      }, 100);
      e.target.removeEventListener("click", cellClicked);
      // event.target.textContent = null;
      return;

      // resetButton.style.display = "inline";
    } else if (oCount == 3) {
      setTimeout(function () {
        winnerAlert.textContent = "O wins!";
      }, 100);
      e.target.removeEventListener("click", cellClicked);
      // event.target.textContent =  null;
      return;
      // resetButton.style.display = "inline";
    }
  }
}

function checkDraw() {
  if (turnCounter == 9) {
    setTimeout(function () {
      winnerAlert.textContent = "Draw!";
    }, 100);
    // event.target.textContent = " ";
   return;
  }
}

function endGame() {
  if (turnCounter == 10) {
    window.location.reload();
  }
  }

