/////////////////////////////Toggel Function
function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("open");
}
//////////////////////////Animation on scoll
window.sr = ScrollReveal();

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-botom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});