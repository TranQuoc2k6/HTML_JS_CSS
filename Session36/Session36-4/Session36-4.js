let btn = document.getElementById("mode-icon");
let body = document.getElementById("body");
let check = JSON.parse(localStorage.getItem("mode")) || 0;
mode();
btn.onclick = () => {
  mode();
};

function mode() {
  if (check) {
    body.classList.remove("dark-mode");
    save();
    check = 0;
  } else {
    body.classList.add("dark-mode");
    save();
    check = 1;
  }
}

function save() {
  localStorage.setItem("mode", JSON.stringify(check));
}