const direction1 = document.querySelector("#direction-1");
const direction2 = document.querySelector("#direction-2");
const toast_type = document.querySelector("#toast-type");
const btn = document.querySelector(".btn");

btn.addEventListener("click", showNotificataion);

const createToast = (direction_1, direaction_2, type) => {
  let mainDiv = document.createElement("div");

  mainDiv.innerHTML = `  <div>
 This is toast
</div>
<div class="clear">X</div>`;

  mainDiv.classList.add("toast");

  if (direction_1 == "left" && direaction_2 == "top") {
    mainDiv.classList.add("showFromLeft");
    mainDiv.style.left = `0px`;
    mainDiv.style.top = `0px`;
  } else if (direction_1 == "right" && direaction_2 == "bottom") {
    mainDiv.classList.add("showFromRight");
    mainDiv.style.bottom = `0px`;
    mainDiv.style.right = `0px`;
  } else if (direction_1 == "left" && direaction_2 == "bottom") {
    mainDiv.classList.add("showFromLeft");
    mainDiv.style.left = `0px`;
    mainDiv.style.bottom = `0px`;
  } else {
    mainDiv.classList.add("showFromRight");
    mainDiv.style.top = `0px`;
    mainDiv.style.right = `0px`;
  }
  mainDiv.classList.add(type);

  document.body.appendChild(mainDiv);
  setTimeout(() => {
    document.body.removeChild(mainDiv);
  }, 2000);

  document.querySelector(".clear").addEventListener("click", () => {
    document.body.removeChild(mainDiv);
  });
};

function showNotificataion() {
  const value1 = direction1.value;
  const value2 = direction2.value;
  const type = toast_type.value;
  console.log(value1, value2);

  createToast(value1, value2, type);
}
