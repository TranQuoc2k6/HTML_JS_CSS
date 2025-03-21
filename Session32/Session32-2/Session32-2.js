let btn = document.getElementById("btn");
let p = document.getElementById("count");
let count = 0;
btn.onclick = function() {
  ++count;
  p.innerText = count;
};