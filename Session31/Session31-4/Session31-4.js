const openModalBtn = document.querySelector(".open-modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModalBtn = document.querySelector(".close-btn");
openModalBtn.addEventListener("click", () => {
    modalOverlay.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
    }
});