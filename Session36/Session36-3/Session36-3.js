let background = document.getElementById("background");
let buttons = document.querySelectorAll("button");
background.classList.add(localStorage.getItem("color"));
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    background.className = "";
    let colors = ["red", "blue", "yellow", "purple"];
    background.classList.add(colors[index]);
    localStorage.setItem("color", colors[index]);
  });
});