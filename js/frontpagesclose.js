const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const sidebar = document.getElementById("sidebar");

closeButton.addEventListener("click", () => {
    sidebar.style.display = "none";
});


openButton.addEventListener("click", () => {
    if (sidebar.style.display === "none") {
        sidebar.style.display = "flex";
    } else {
        sidebar.style.display = "none";
    }
});