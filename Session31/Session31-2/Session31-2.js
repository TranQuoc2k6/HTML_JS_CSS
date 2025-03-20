document.getElementById("btn-change").onclick = function () {
    let currentBgColor = document.body.style.backgroundColor;
    if (currentBgColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}