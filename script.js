const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const scoreBox = document.getElementById("score");

let turn = true;
const x = "X";
const o = "O";
let count = 0;
//let boxClicked = {}

function clickBox(box) {
  box.onclick = () => {
    if (turn) {
      box.innerHTML = "X";
      turn = false;
      count++;
      check = true;
      box.classList.add("disabled");
    } else if (!turn) {
      box.innerHTML = "O";
      turn = true;
      count++;
      box.classList.add("disabled");
    }
    checkWinner();
  };
}

function checkWinner() {
  if (box1.innerHTML === "X" && box2.innerHTML === "X" && box3.innerHTML === "X") {
    scoreBox.textContent = "X WINS";
  } else if (box4.innerHTML === "X" && box5.innerHTML === "X" && box6.innerHTML === "X") {
    scoreBox.textContent = "X WINS";
  } else if (box7.innerHTML === "X" && box8.innerHTML === "X" && box9.innerHTML === "X") {
    scoreBox.textContent = "X WINS";
  } else if (box1.innerHTML === "X" && box5.innerHTML === "X" && box9.innerHTML === "X") {
    scoreBox.textContent = "X WINS";
  } else if (box3.innerHTML === "X" && box5.innerHTML === "X" && box7.innerHTML === "X") {
    scoreBox.textContent = "X WINS";
  } else if (box1.innerHTML === "X" && box4.innerHTML === "X" && box7.innerHTML === "X") {
    scoreBox.textContent = "X WINS";
  } else if (box2.innerHTML === "X" && box5.innerHTML === "X" && box8.innerHTML === "X") {
    scoreBox.textContent = "X WINS";
  } else if (box3.innerHTML === "X" && box6.innerHTML === "X" && box9.innerHTML === "X") {
    scoreBox.textContent = "X WINS";
  } else if (box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O") {
    scoreBox.textContent = "O WINS";
  } else if (box4.innerHTML === "O" && box5.innerHTML === "O" && box6.innerHTML === "O") {
    scoreBox.textContent = "O WINS";
  } else if (box7.innerHTML === "O" && box8.innerHTML === "O" && box9.innerHTML === "O") {
    scoreBox.textContent = "O WINS";
  } else if (box1.innerHTML === "O" && box5.innerHTML === "O" && box9.innerHTML === "O") {
    scoreBox.textContent = "O WINS";
  } else if (box3.innerHTML === "O" && box5.innerHTML === "O" && box7.innerHTML === "O") {
    scoreBox.textContent = "O WINS";
  } else if (box1.innerHTML === "O" && box4.innerHTML === "O" && box7.innerHTML === "O") {
    scoreBox.textContent = "O WINS";
  } else if (box2.innerHTML === "O" && box5.innerHTML === "O" && box8.innerHTML === "O") {
    scoreBox.textContent = "O WINS";
  } else if (box3.innerHTML === "O" && box6.innerHTML === "O" && box9.innerHTML === "O") {
    scoreBox.textContent = "O WINS";
  } else if (count === 9) {
    scoreBox.textContent = "TIE";
    scoreBox.style.backgroundColor = "red";
  }
}

clickBox(box1);
clickBox(box2);
clickBox(box3);
clickBox(box4);
clickBox(box5);
clickBox(box6);
clickBox(box7);
clickBox(box8);
clickBox(box9);
