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


let next = document.querySelector(".next")
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])

})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])

})

var counter = 1;
setInterval(function(){
    document.getElementById('radio' +counter).checked=true;
    counter++;
    if(counter>4){
        counter=1
    }
},5000)