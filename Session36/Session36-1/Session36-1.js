document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const saveBtn = document.getElementById("saveBtn"); 
    const greeting = document.getElementById("greeting");
    const nameForm = document.getElementById("nameForm");
    const changeNameBtn = document.getElementById("changeNameBtn");
    if (!saveBtn) {
        console.error("Lỗi: Không tìm thấy nút Lưu! Kiểm tra ID trong HTML.");
        return;
    }
    const savedName = localStorage.getItem("userName");
    if (savedName) {
        displayGreeting(savedName);
    }

    saveBtn.addEventListener("click", function () {
        const name = nameInput.value.trim();
        if (name) {
            localStorage.setItem("userName", name);
            displayGreeting(name);
        }
    });

    function displayGreeting(name) {
        greeting.innerHTML = `👋 Chào bạn, ${name}!`;
        nameForm.style.display = "none";
        changeNameBtn.style.display = "block";
    }

    changeNameBtn.addEventListener("click", function () {
        localStorage.removeItem("userName");
        greeting.textContent = "Nhập tên của bạn";
        nameForm.style.display = "block";
        changeNameBtn.style.display = "none";
    });
});
