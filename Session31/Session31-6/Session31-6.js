document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
        let inputUsername = document.getElementById("username").value;
        let inputPassword = document.getElementById("password").value;
        if (inputUsername === "qatran2k6@gmail.com" && inputPassword === "123456789") {
            console.log(" Đăng nhập thành công");
            alert("Đăng nhập thành công!");
        } else {
            console.log(" Đăng nhập thất bại");
            alert("Đăng nhập thất bại! Vui lòng kiểm tra lại.");
        }
    });