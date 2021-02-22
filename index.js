//variables
const reticle = document.getElementById('reticle');
const body = document.body;

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

const width = body.clientWidth;
const height = body.clientHeight;

targets();

function targets() {
    setInterval(function(){
        body.innerHTML = 
            `<figure class = 'target'
                style = '
                    top: ${Math.random()*height}px;
                    left: ${Math.random()*width}px;
                '
            ></figure>`
    }, 1000);
}




