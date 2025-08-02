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


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval = setInterval(() => changeSlide(1), 5000);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function changeSlide(n) {
    let newIndex = (currentSlide + n + slides.length) % slides.length;
    showSlide(newIndex);
    resetInterval();
}

function goToSlide(n) {
    showSlide(n);
    resetInterval();
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => changeSlide(1), 5000);
}

// Touch support for mobile
let startX = 0;
document.querySelector('.slides').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
document.querySelector('.slides').addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) changeSlide(-1);
    else if (startX - endX > 50) changeSlide(1);
});

// Initialize
showSlide(currentSlide);
