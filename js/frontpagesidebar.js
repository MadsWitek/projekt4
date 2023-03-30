const closeSidebarBtn = document.querySelector('close-sidebar');
const sidebar = document.querySelector('.sidebar');

closeSidebarBtn.addEventListener("click", function() {
    sidebar.style.display = 'none';
});


