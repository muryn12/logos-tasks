function color(){
    let background = document.getElementById("background");
    let foto = document.getElementById("foto");
    background.style.display = "";
    foto.style.display = "none";
}

function chooseColor(id){
    let color = document.getElementById(id);
    color.style.backgroundColor = id;
    document.body.style.backgroundColor = color.style.backgroundColor;
    document.body.style.backgroundImage = "";
}

// function chooseBlue(){
//     let blue = document.getElementById("blue");
//     blue.style.backgroundColor = "blue";
//     document.body.style.backgroundColor = blue.style.backgroundColor;
// }

function img(){
    let foto = document.getElementById("foto");
    let background = document.getElementById("background");
    background.style.display = "none";
    foto.style.display = "";
}

function chooseImage(id){
    let imgOne = document.getElementById(id);
    document.body.style.backgroundImage = "url(" + imgOne.src + ")";
}

