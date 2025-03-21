let input = document.getElementById("input");
let btn = document.getElementById("btn");
let subject = document.getElementById("subject");

btn.onclick = function() {
  if (input.value !== "") {
    subject.innerHTML += `<li>${input.value}</li>`;
    input.value = "";
  } else {
    alert("Không được để trống!");
  }
};