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

//another example for promises

let demoPromise = new Promise((resolve, reject) => {
  let value = true;
  setTimeout(() => {
    if (value) {
      resolve("done");
    } else {
      reject("failed");
    }
  }, 2000);
});

demoPromise
  .then((status) => {
    console.log(status);
  })
  .catch((err) => {
    console.log(err);
  });
