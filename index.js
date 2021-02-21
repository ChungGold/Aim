//variables
const reticle = document.getElementById('reticle');

//mouse tracker
const mouse = {
    x: null,
    y: null
};

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    reticle.style.top = mouse.y + 'px';
    reticle.style.left = mouse.x + 'px';
});

//cursor reticle function




