//variables
const reticle = document.getElementById('reticle');
const score = document.getElementById('score');

const spawn = document.getElementById('spawn');
const width = spawn.clientWidth;
const height = spawn.clientHeight;

const targets = document.getElementsByClassName('target');
const loser = document.getElementById('loser');
const finalScore = document.getElementById('finalScore');
const reset = document.getElementById('againButton');

let counter = 0;

let tick = 0;

let scoreNumber = 0;

//mouse tracker
const mouse = {
    x: null,
    y: null
};

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    reticle.style.top = mouse.y - 25 + 'px';
    reticle.style.left = mouse.x - 3 + 'px';
});

//target appearance

const spawnInterval = setInterval(function(){ 
    let movement = Math.floor(Math.random() * 4);
    console.log(movement);

    const newTargets = document.createElement('div');
    newTargets.style.top = Math.random() * height + 'px';
    newTargets.style.left = Math.random() * width + 'px';
    newTargets.className = 'target';
    newTargets.style.borderRadius = '50%';

    if (movement === 0){
        newTargets.className = 'upDown target';
    } else if (movement === 1){
        newTargets.className = 'leftRight target';
    } else if (movement === 2){
        newTargets.className = 'diagRight target';
    } else if (movement === 3){
        newTargets.className = 'diagLeft target';
    }

    // newTargets.getAnimations

    let randomSize = Math.random() * 100;
    newTargets.style.width = randomSize + 10 + 'px';
    newTargets.style.height = randomSize + 10 + 'px';
    spawn.appendChild(newTargets); 

    if (targets.length === 5) {
        clearInterval(spawnInterval);
        loser.style.display = 'flex';
        finalScore.innerHTML = `<p>${scoreNumber}</p>`;
    }
}, 1500);

//break targets

setInterval(targetFx, 2000);

function targetFx() {
    for (i = 0; i < targets.length; i++){
        targets[i].addEventListener('click', function(){
            this.remove();
            scoreNumber+= 100;
            score.innerHTML = `Score: ${scoreNumber}`
        });
    }
}

//reset

reset.addEventListener('click', function() {
    location.reload();
});







