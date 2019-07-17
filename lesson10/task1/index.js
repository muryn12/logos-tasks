function setText(){
    let inputLeft = document.getElementById("left");
    let inputRight = document.getElementById("right");
    
    if(left.value != ""){
        right.value = left.value;
        left.value = "";
    }
}

function onPlaceholderChange(){
    let placeholder = document.getElementById("pl");
    placeholder.placeholder = placeholder.value;
    placeholder.value = '';
}