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


//pour le slider des pages acceuil et annonces
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
//fin du slider




//-----------------------------------------rubrique des albums------------------------------------
function DisplayImage(index, containerId) {
    const albumContainer = document.querySelectorAll(`#${containerId} img`);
    const items = document.getElementById('items');
    const overlay2 = document.getElementById('overlay2');
    const img = `<img src="${albumContainer[index].src}">`;


    overlay2.style.display = "block"
    items.style.display = "flex";
    
    overlay2.innerHTML = img
    return albumContainer
}

function NextImage() {
    const albumContainer = document.querySelectorAll(`#photo1 img`);
    const currentSrc = document.querySelector('#overlay2 img').src;
    const index = [...albumContainer].findIndex(img => img.src === currentSrc);
    
    const overlay2 = document.getElementById('overlay2');
    let nextImg = `<img src="${albumContainer[(index + 1)].src}" id="nextOverlayImg">`;
    overlay2.innerHTML = nextImg;

        const img = document.querySelector('#overlay2 img');
        if (img) img.style.animation = 'fadeLeft 0.3s linear';
}
nextImg(DisplayImage(index, containerId))
function PreviousImage(){
    const albumContainer = document.querySelectorAll("#photo1 img");
    const leftArrow = document.getElementById('lA');

    const currentSrc = document.querySelector('#overlay2 img').src;
    const index = [...albumContainer].findIndex(img => img.src === currentSrc);

    const overlay2 = document.getElementById('overlay2');
    let nextImg = `<img src="${albumContainer[(index - 1)].src}">`;

    overlay2.innerHTML = nextImg;
    
    const img = document.querySelector('#overlay2 img');
    if (img) img.style.animation = 'fadeRight 0.3s linear';
}

function CloseImages() {
    const items = document.getElementById('items');
    const overlay2 = document.getElementById('overlay2');

    overlay2.style.display = "none"
    items.style.display = "none";
}