const btn = document.getElementById("btn");
const changeColor = (selector, color, time) => {
  const element = document.querySelector(`.${selector}`);
  return new Promise((resolve, reject) => {
    if (selector) {
      setTimeout(() => {
        resolve("it has a selector");
        element.style.color = color;
      }, time);
    } else {
      reject("selector" + selector + "does not exist");
    }
  });
};

const dispaly = () => {
  changeColor("first", "blue", 3000)
    .then((data) => {
      console.log(data);
      changeColor("second", "red", 2000);
    })
    .catch((err) => console.log(err));
};

btn.addEventListener("click", dispaly);
