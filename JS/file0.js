window.onload = function() {
    document.getElementById("loader").style.display = "none";
};
function openMenu() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("overlay").style.display = "block";
}
function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px";
    document.getElementById("overlay").style.display = "none";
}
function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    var submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}