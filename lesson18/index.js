let cursive = document.getElementById('cursive');
let underline = document.getElementById('underline');
let lineThrough = document.getElementById('line-through');
let alignLeft = document.getElementById('alignLeft');
let paragraf = document.querySelector('.paragrafBox');
let leftChecked = true;
let centerChecked = true;
let rightChecked = true;

function setBold() {
    paragraf.classList.toggle('bold');
}

function setCursive() {
    paragraf.classList.toggle('cursive');
}

function setUnderline(){
    paragraf.classList.toggle('underline');
}

function setLineThrough(){
    paragraf.classList.toggle('line-through');
}

function setAlignLeft(){
    if (leftChecked) {
        leftChecked = true;
        paragraf.style.textAlign = "left";
    }
}

function setAlignCenter(){
    if (centerChecked) {
        centerChecked = true;
        paragraf.style.textAlign = "center";
    }
}

function setAlignRight(){
    if (rightChecked) {
        rightChecked = true;
        paragraf.style.textAlign = "right";
    }
}

function setFontFamily(font){
    paragraf.style.fontFamily = font;
} 

function setFontSize(size){
    paragraf.style.fontSize = size;
}

function setColorText(color){
    paragraf.style.color = color;
}

function setBackground(background){
    paragraf.style.backgroundColor = background;
    paragraf.style.backgroundImage = "";
}

function chooseImage(id){
    let imgOne = document.getElementById(id);
    paragraf.style.backgroundImage = "url(" + imgOne.src + ")";
}

document.getElementById('customFile').addEventListener("change", function () {
        if (this.files[0]) {
          let fr = new FileReader();
      
          fr.addEventListener("load", function () {
            paragraf.style.backgroundImage = "url(" + fr.result + ")";
          }, false);
      
          fr.readAsDataURL(this.files[0]);
        }
    })
    // function customFile(){
    // let customFile = document.getElementById('customFile');
    // let chunks = customFile.value.split('\\');
    // let filename = chunks[chunks.length - 1];
    // paragraf.style.backgroundImage = "url(custom_img/" + filename + ")";
    //   });

    let textarea = document.getElementById("myTextarea");
    let boxEdit = document.getElementById("boxEdit");
    let grayBox = document.getElementById("grayBox");

function edit(){
    grayBox.style.display = "none";
    boxEdit.style.display = "";
    paragraf.style.display = "none";
    textarea.style.display = "";
    textarea.value = paragraf.innerHTML;
}

function save(){
    paragraf.style.display = "";
    textarea.style.display = "none";
    grayBox.style.display = "";
    boxEdit.style.display = "none";
    paragraf.innerHTML = textarea.value;
}

let countTr = document.getElementById("countTr");
let countTd = document.getElementById("countTd");
let widthOfTd = document.getElementById("widthOfTd");
let heightOfTd = document.getElementById("heightOfTd");
let widthOfBorder = document.getElementById("widthOfBorder");
let typeOfBorder = document.getElementById("typeOfBorder");
let colorOfBorder = document.getElementById("colorOfBorder");
let error = document.getElementById("error");

function validationTable(){
    countTr.style.border = countTr.value === "" || isNaN(countTr.value) ? "1px solid red" : "1px solid grey";
    countTd.style.border = countTd.value === "" || isNaN(countTd.value) ? "1px solid red" : "1px solid grey";
    widthOfTd.style.border = widthOfTd.value === "" || isNaN(widthOfTd.value) ? "1px solid red" : "1px solid grey";
    heightOfTd.style.border = heightOfTd.value === "" || isNaN(heightOfTd.value) ? "1px solid red" : "1px solid grey";
    widthOfBorder.style.border = widthOfBorder.value === "" || isNaN(widthOfBorder.value) ? "1px solid red" : "1px solid grey";
    typeOfBorder.style.border = typeOfBorder.value == "" ? "1px solid red" : "1px solid grey";
    colorOfBorder.style.border = colorOfBorder.value == "" ? "1px solid red" : "1px solid grey";

    const isAnyFielsIncorrect = countTr.value === "" || isNaN(countTr.value) || countTd.value === "" || isNaN(countTd.value) || widthOfTd.value === "" || isNaN(widthOfTd.value) || heightOfTd.value === "" || isNaN(heightOfTd.value) || widthOfBorder.value === "" || isNaN(widthOfBorder.value) || typeOfBorder.value == "" || colorOfBorder.value == "";
    error.innerHTML = isAnyFielsIncorrect ? "Invalid value" : "";

    return !isAnyFielsIncorrect;
}

function createTable(){
    let isValid = validationTable();
    if(!isValid)
        return;

    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
   
    for(let i=0; i<+countTr.value; i++){
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for(let j=0; j<+countTd.value; j++){
            let td = document.createElement("td");
            td.style.width = widthOfTd.value + 'px';
            td.style.height = heightOfTd.value + 'px';
            td.style.borderWidth = widthOfBorder.value + 'px';
            td.style.borderStyle = typeOfBorder.value;
            td.style.borderColor = colorOfBorder.value;
            tr.appendChild(td);
            td.innerHTML = "TD";
        }
    }
    textarea.value += table.outerHTML;
}

let countLi = document.getElementById("countLi");
let typeOfMarks = document.getElementById("typeOfMarks");
let errorUl = document.getElementById("errorUl");

function validationUl(){
    countLi.style.border = countLi.value === "" || isNaN(countLi.value) ? "1px solid red" : "1px solid grey"; 
    typeOfMarks.style.border = typeOfMarks.value === "" ? "1px solid red" : "1px solid grey";
       
    const isAnyFielsIncorrectUl = countLi.value === "" || isNaN(countLi.value) || typeOfMarks.value === "";
    errorUl.innerHTML = isAnyFielsIncorrectUl ? "Invalid value" : "";

    return !isAnyFielsIncorrectUl;
}
       
function createUl(){
    let isValid = validationUl();
    if(!isValid)
        return; 
    let ul = document.createElement("ul");
    for(let i=0; i<+countLi.value; i++){
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = 'item' + (i + 1);
    }
    ul.style.listStyleType = typeOfMarks.value;
    textarea.value += ul.outerHTML;
}

let countLiOl = document.getElementById("countLiOl");
let typeOfMarksOl = document.getElementById("typeOfMarksOl");
let errorOl = document.getElementById("errorOl");

function validationOl(){
    countLiOl.style.border = countLiOl.value === "" || isNaN(countLiOl.value) ? "1px solid red" : "1px solid grey"; 
    typeOfMarksOl.style.border = typeOfMarksOl.value === "" ? "1px solid red" : "1px solid grey";
       
    const isAnyFielsIncorrectOl = countLiOl.value === "" || isNaN(countLiOl.value) || typeOfMarksOl.value === "";
    errorOl.innerHTML = isAnyFielsIncorrectOl ? "Invalid value" : "";

    return !isAnyFielsIncorrectOl;
}
function createOl(){ 
    let isValid = validationOl();
    if(!isValid)
        return; 
    let ol = document.createElement("ol");
    for(let i=0; i<+countLiOl.value; i++){
        let li = document.createElement("li");
        ol.appendChild(li);
        li.innerHTML = 'item' + (i + 1);
    }
    ol.style.listStyleType = typeOfMarksOl.value;
    textarea.value += ol.outerHTML;
}

function resetTable(){
    countTr.value = "";
    countTd.value = "";
    widthOfTd.value = "";
    heightOfTd.value = "";
    widthOfBorder.value = "";
    typeOfBorder.value = "";
    colorOfBorder.value = "";
}

function resetUl(){
    countLi.value = "";
    typeOfMarks.value = "";
}

function resetOl(){
    countLiOl.value = "";
    typeOfMarksOl.value = "";
}

function validationSignIn(){
    let log = document.getElementById("login");
    let pass = document.getElementById("password");
    let mistake = document.getElementById("mistake");
    if(log.value == "" || pass.value == ""){
        log.style.border = "1px solid red";
        pass.style.border = "1px solid red";
        return mistake.innerHTML = "Value is empty";
    }
    if(log.value !== "admin" || pass.value !== "admin"){
        log.style.border = "1px solid red";
        pass.style.border = "1px solid red";
        return mistake.innerHTML = "Please check your login or password";
    }
    $("#loginModal").modal('hide');
}
 
    


    

