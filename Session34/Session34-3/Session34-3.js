document.getElementById("btn").onclick = (event) => {
    event.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (email.value === "") {
        alert("Email không được bỏ trống");
    } else if (password.value === "") {
        alert("mật khẩu không được bỏ trống");
    } else if (
        localStorage.getItem("password") === password.value &&
        localStorage.getItem("email") === email.value
    ) {
        window.location.href = "https://fullstack.edu.vn/";
    } else {
        alert("xác nhận không trùng khớp");
    }
};