const boxEl = document.getElementsByClassName("box")[0];
const btnEL = document.getElementsByTagName("button")[0];
console.log(boxEl);
console.log(btnEL);

const colors = ["green", "yellow", "red"];
let i = 0;

function generateColor() {
  const rColor = Math.floor(Math.random() * 256); // 0.9234324 => 253
  const gColor = Math.floor(Math.random() * 256); // 0.9234324 => 253
  const bColor = Math.floor(Math.random() * 256);
  //   return "rgb(" + rColor + "," + gColor + "," + bColor + ")"; //
  return `rgb(${rColor},${gColor},${bColor})`;
}

function changeBackgroundColor() {
  boxEl.style.backgroundColor = generateColor();

  //   boxEl.style.backgroundColor = colors[i];
  //   i++;
  //   if (i === colors.length) {
  //     i = 0;
  //   }
}

btnEL.addEventListener("click", changeBackgroundColor);
