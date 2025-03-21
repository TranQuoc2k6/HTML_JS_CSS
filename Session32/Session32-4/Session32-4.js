let input = document.getElementById("input");
let btn = document.getElementById("btn");
let check = document.getElementById("check");

btn.onclick = function() {
  if (checkEmail(input.value)) {
    check.innerText = "Email hợp lệ!!";
    check.style.color = "green";
  } else {
    check.innerText = "Email không hợp lệ!!!";
    check.style.color = "red";
  }
};

function checkEmail(email) {
  const allowedDomains = ["com", "vn"];
  const regex = new RegExp(`\\.(${allowedDomains.join("|")})$`, "i");
  return regex.test(email);
} 