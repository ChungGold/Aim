//variables
const reticle = document.getElementById('reticle');

const spawn = document.getElementById('spawn');
const width = spawn.clientWidth;
const height = spawn.clientHeight;

let counter = 0;

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

//target appearance

setInterval(function(){ 
    const newTargets = document.createElement('div');
    newTargets.style.top = Math.random() * height + 'px';
    newTargets.style.left = Math.random() * width + 'px';
    newTargets.className = 'target';

    let randomSize = Math.random() * 100;
    newTargets.style.width = randomSize + 'px';
    newTargets.style.height = randomSize + 'px';
    spawn.appendChild(newTargets); 

    let targets = document.getElementsByClassName('target');
}, 1000);

//break targets

for (i = 0; i <= targets.length; i++){
    targets[i].addEventListener('click', function(){
        targets[i].remove();
    });
}







