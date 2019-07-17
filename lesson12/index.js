function editText(){
    let textInTop = document.getElementById('topBox');
    let textarea = document.getElementById("myTextarea");
    let textareaButton = document.getElementById("textareaButton");
    let bottomBoxStyle = document.getElementById("bottomBoxStyle");
    let bottomBox = document.getElementById("bottomBox");
    bottomBox.style.display = '';
    textarea.value = textInTop.innerHTML;
    textareaButton.style.display = '';
    bottomBoxStyle.style.display = 'none';
}

function saveText(){
    let textInTop = document.getElementById('topBox');
    let textarea = document.getElementById("myTextarea");
    let textareaButton = document.getElementById("textareaButton");
    textInTop.innerHTML = textarea.value;
    textarea.value = '';
    textareaButton.style.display = 'none';
}

function styleText(){
    let bottomBoxStyle = document.getElementById("bottomBoxStyle");
    let bottomBox = document.getElementById("bottomBox");
    bottomBoxStyle.style.display = '';
    bottomBox.style.display = 'none';
}

function setFontSize(fontSize){
    let textInTop = document.getElementById('topBox');
    textInTop.style.fontSize = fontSize;
}

function setFontFamily(){
    let font = document.getElementById("fontFamily");
    let textInTop = document.getElementById('topBox');
    textInTop.style.fontFamily = font.value;
}

function chooseColor(){
    let color = document.getElementById("color");
    let background = document.getElementById("background");
    color.style.display = "";
    background.style.display = "none";
}

function chooseBackground(){
    let background = document.getElementById("background");
    let color = document.getElementById("color");
    color.style.display = "none";
    background.style.display = "";
}

function setColor(color){
     let textInTop = document.getElementById('topBox');
     textInTop.style.color = color;
}

function setBackground(background){
    let textInTop = document.getElementById('topBox');
    textInTop.style.backgroundColor = background;
}

function setBoltText(){
    let textInTop = document.getElementById('topBox');
    let checkedBold = document.getElementById('bold');
     if (checkedBold.checked){
        textInTop.style.fontWeight = "bold";
    }
    else{
        textInTop.style.fontWeight = 'normal';
    }
}

function setCursiveText(){
    let textInTop = document.getElementById('topBox');
    let checkedCursive = document.getElementById('cursive');
    if (checkedCursive.checked){
        textInTop.style.fontFamily = 'cursive';
    }
    else{
        textInTop.style.fontFamily = 'normal'
    }
}

function addSomething(){
    let textInTop = document.getElementById('topBox');
    let bottomBox = document.getElementById("bottomBox");
    let something = document.getElementById("something");
    let edit = document.getElementById("edit");
    let style = document.getElementById("style");
    bottomBox.style.display = 'none';
    textInTop.style.display = "none";
    something.style.display = "";
    edit.style.display = "none";
    style.style.display = "none";
}

function setTable(){
    let addTable = document.getElementById("addTable");
    addTable.style.display = '';
    let addList = document.getElementById("addList");
    addList.style.display = 'none';
}

function createTable(){
    let countTr = document.getElementById("countTr");
    let countTd = document.getElementById("countTd");
    let widthOfTd = document.getElementById("widthOfTd");
    let heightOfTd = document.getElementById("heightOfTd");
    let widthOfBorder = document.getElementById("widthOfBorder");
    let typeOfBorder = document.getElementById("typeOfBorder");
    let colorOfBorder = document.getElementById("colorOfBorder");
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
    let something = document.getElementById("something");
    let textInTop = document.getElementById('topBox');
    let bottomBox = document.getElementById("bottomBox");
    let textarea = document.getElementById("myTextarea");
    let edit = document.getElementById("edit");
    let style = document.getElementById("style");
    something.style.display = 'none';
    bottomBox.style.display = '';
    textInTop.style.display = '';
    textarea.value += table.outerHTML;
    edit.style.display = "";
    style.style.display = "";
    countTr.value = '';
    countTd.value ='';
    widthOfTd.value = '';
    heightOfTd.value = '';
    widthOfBorder.value = '';
    typeOfBorder.value = '';
    colorOfBorder.value = '';
}

function setList(){
    let addList = document.getElementById("addList");
    let addTable = document.getElementById("addTable");
    addTable.style.display = 'none';
    addList.style.display = '';
}

function createList(){
    let countLi = document.getElementById("countLi"); 
    let ul = document.createElement("ul");
    for(let i=0; i<+countLi.value; i++){
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = 'item' + (i + 1);
    }
    let textarea = document.getElementById("myTextarea");
    let typeOfMarks = document.getElementById("typeOfMarks");
    let something = document.getElementById("something");
    let textInTop = document.getElementById('topBox');
    let bottomBox = document.getElementById("bottomBox");
    let edit = document.getElementById("edit");
    let style = document.getElementById("style");
    textarea.value += ul.outerHTML;
    ul.listStyleType = typeOfMarks.value;
    something.style.display = 'none';
    bottomBox.style.display = '';
    textInTop.style.display = '';
    edit.style.display = "";
    style.style.display = ""; 
    countLi.value = '';
    typeOfMarks.value = '';
}