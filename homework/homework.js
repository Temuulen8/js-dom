// const boxEl1 = document.getElementsByClassName("box1")[0];
// const boxEl2 = document.getElementsByClassName("box2")[0];
// const boxEl3 = document.getElementsByClassName("box3")[0];
// const boxEl4 = document.getElementsByClassName("box4")[0];
// const boxEl5 = document.getElementsByClassName("box5")[0];
// const boxEl6 = document.getElementsByClassName("box6")[0];
// const boxEl7 = document.getElementsByClassName("box7")[0];
// const boxEl8 = document.getElementsByClassName("box8")[0];
// const boxEl9 = document.getElementsByClassName("box9")[0];
const boxEl = document.getElementsByClassName("grid-item");
const btnEL = document.getElementById("click");

console.log(boxEl);
console.log(btnEL);
console.log(btnEL1);

const colors = ["green", "yellow", "red"];
let i = 0;

function generateColor() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);

  return `rgb(${rColor},${gColor},${bColor})`;
}

function changeBackgroundColor() {
  console.log("changed");
  for (let i = 0; i < boxEl.length; i++) {
    boxEl[i].style.backgroundColor = generateColor();
  }
  // boxEl1.style.backgroundColor = generateColor();
  // boxEl2.style.backgroundColor = generateColor();
  // boxEl3.style.backgroundColor = generateColor();
  // boxEl4.style.backgroundColor = generateColor();
  // boxEl5.style.backgroundColor = generateColor();
  // boxEl6.style.backgroundColor = generateColor();
  // boxEl7.style.backgroundColor = generateColor();
  // boxEl8.style.backgroundColor = generateColor();
  // boxEl9.style.backgroundColor = generateColor();
}

btnEL.addEventListener("click", changeBackgroundColor);

const btnEL1 = document.getElementById("add");

add.addEventListener("click", function () {
  const newBox = document.createElement("div");
  newBox.calssName = "box";
  const parent = document.getElementsByClassName("grid-container")[0];
  parent.appeandChild(newBox);
});
