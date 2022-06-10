const mainContainer = document.querySelector(".main-container");
var startingSize = 7;
var size = startingSize;
var score = 0;
const minMax = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomColors = () => {
  var red = minMax(5, 100);
  var green = minMax(5, 155);
  var blue = minMax(5, 255);
  var ratio = 0.8 + Math.random() * 0.1;
  var fixedRatio = ratio.toFixed(2);
  console.log(fixedRatio);
  var even = `rgba(${red},${green},${blue})`;
  var odd = `rgba(${red},${green},${blue},${fixedRatio})`;
  return { odd, even };
};

const generateBoard = (container, size) => {
  var fragment = document.createDocumentFragment();
  for (let i = 0; i < size; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      row.appendChild(box);
    }
    fragment.appendChild(row);
  }

  container.appendChild(fragment);
  let randNum = minMax(0, size * size - 1);
  let colors = randomColors();

  let all = document.querySelectorAll(".box");
  let odd = (all[randNum].id = "odd-box");

  all.forEach((div) => {
    div.style.background = colors.even;
  });
  let one = (document.querySelector("#odd-box").style.background = colors.odd);
};

generateBoard(mainContainer, size);

document.addEventListener("click", (e) => {
  console.log(e.target);
});
