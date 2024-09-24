const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");
const lists = document.querySelectorAll("li");

let curIndex = 0;

rightArrow.onclick = function () {
  lists[curIndex].classList.remove("show");
  curIndex++;
  if (curIndex === lists.length) curIndex = 0;
  lists[curIndex + 1].classList.add("show");
};

leftArrow.onclick = function () {
  lists[curIndex].classList.remove("show");
  curIndex--;
  if (curIndex === -1) curIndex = 4;
  lists[curIndex - 1].classList.add("show");
};
