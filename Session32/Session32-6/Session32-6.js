let up = document.getElementById("up");
let down = document.getElementById("down");
let text = document.getElementById("text");

let size = parseFloat(window.getComputedStyle(text).fontSize);

up.onclick = () => {
  size++;
  set();
};
down.onclick = () => {
  if (size > 0) {
    size--;
    set();
  }
};

function set() {
  text.style.fontSize = size + "px";
}