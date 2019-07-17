const bird = document.querySelector('.bird');

function moveUp() {
    let goTop = bird.offsetTop;
    if(goTop>0){
        bird.style.top = goTop - 10 + 'px';
    }
}
function moveLeft(){
    let goLeft = bird.offsetLeft;
        if(goLeft>0){
            bird.style.left = goLeft - 10 + 'px';
        }
}
function moveRight(){
    let goRight = bird.offsetLeft;
        if(goRight<window.innerWidth-110){
            bird.style.left = goRight + 10 + 'px';
        }
}
function moveDown(){
    let goDown = bird.offsetTop;
        if(goDown<window.innerHeight-110){
            bird.style.top = goDown + 10 + 'px';
        }
}