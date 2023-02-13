const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

let turn = true;

function clickBox(box) {
  box.onclick = () => {
    if (turn) {
      box.innerHTML = "X";
      turn = false;
    } else if (!turn) {
      box.innerHTML = "O";
      turn = true;
    }
  };
}

clickBox(box1);
clickBox(box2);
