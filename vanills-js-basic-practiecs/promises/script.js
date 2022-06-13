console.log("promise");

const changeColor = (selector, color, time) => {
  return new Promise((resolve, reject) => {
    if (selector) {
      setTimeout(() => {
        document.querySelector("." + selector).style.color = color;
      }, time);
      resolve("it has a selector");
    } else {
      reject("selector" + selector + "does not exist");
    }
  });
};

const dispaly = () => {
  changeColor(first, "blue", 3000).then((data) => {
    console.log(data);
  });
};
