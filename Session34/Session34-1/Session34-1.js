document.getElementById("btn").onclick = () => {
    event.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let checkPassword = document.getElementById("check-password");
    if (email.value === "") {
        alert("Email không được bỏ trống");
    } else if (password.value === "") {
        alert("Mật khẩu không được bỏ trống");
    } else if (checkPassword.value === "") {
        alert("Xác nhận mật khẩu không được bỏ trống");
    } else if (password.value === checkPassword.value) {
        alert("Xác nhận mật khẩu trùng khớp");
        localStorage.setItem("password", password.value);
        localStorage.setItem("email", email.value);
    } else {
        alert("Xác nhận mật khẩu không trùng khớp");
    }
};