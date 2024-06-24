// function aaa() {
//   console.log("button clicked");
//   document.getElementById("box").style.backgroundColor = "blue";
// }
const boxEl = document.getElementsByClassName("box")[0];
const btnEl = document.getElementsByTagName("button")[0];
console.log(boxEl);
console.log(btnEl);

const colors = ["green", "blue", "red"];
let i = 0;

function generateColor() {
  console.log("changed");
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);
  //   "rgb(" + rColor + "," + rColor + "," + rColor + ")";
  return `rgb(${rColor},${gColor},${bColor})`;
}
function changeBackgroundColor() {
  boxEl.style.backgroundcolor = generateColor();

  //   boxEl.style.backgroundColor = colors[i];
  //   i++;
  //   if (i === colors.length) {
  //     i = 0;
  //   }
}
btnEl.addEventListener("click", changeBackgroundColor);
