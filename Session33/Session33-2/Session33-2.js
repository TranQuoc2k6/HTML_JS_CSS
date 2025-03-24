let input = document.getElementById("input");
let count = document.getElementById("count");
let btn = document.getElementById("btn");
btn.onclick = function() {
  count.innerText = input.value.length;
};