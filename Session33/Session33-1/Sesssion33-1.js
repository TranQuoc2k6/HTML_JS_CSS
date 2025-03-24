let icon = document.getElementById("icon-show");
let input = document.getElementById("input");
let check = 0;
icon.onclick = () => {
  if (check) {
    input.type = "text";
    check = 0;
  } else {
    input.type = "password";
    check = 1;
  }
};