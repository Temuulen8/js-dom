const boxEl = document.getElementsByClassName("grid-item ")[0, 1, 2, 3, 4, 5, 6, 7, 8];
const btnEL = document.getElementsByTagName("button")[0];
console.log(boxEl);
console.log(btnEL);

const colors = ["green", "yellow", "red"];
let i = 0;

function generateColor() {
  const rColor = Math.floor(Math.random() * 256); 
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);
  
  return `rgb(${rColor},${gColor},${bColor})`;
}

function changeBackgroundColor() {
  boxEl.style.backgroundColor = generateColor();
}

btnEL.addEventListener("click", changeBackgroundColor);