function onAgreementChanged(){
    let agreement = document.getElementById("agreement");
    let signIn = document.getElementById("signIn");

    if(agreement.checked)
        signIn.removeAttribute("disabled");
    else
        signIn.setAttribute("disabled", "");
}

function onSingInClick() {
    setImage();
    setTopText();
    setMiddleText();
    setBottomText();
    setBlockVisibility(false);
}

function setImage(){
    let radMan = document.getElementById("rad-man");
    let imgMan = document.getElementById("img-man");
    let imgWoman = document.getElementById("img-woman");
    if(radMan.checked){
        imgMan.style.display = '';
        imgWoman.style.display = 'none';
    }
    else{
        imgMan.style.display = 'none';
        imgWoman.style.display = '';
    }
}

function setTopText(){
    let firstName = document.getElementById("firstName");
    let secondName = document.getElementById("secondName");
    let topText = document.getElementById("top-text");
    topText.innerText = firstName.value + " " + secondName.value;
}

function setMiddleText(){
    let emailAddress = document.getElementById("emailAddress");
    let middleText = document.getElementById("middle-text");
    middleText.innerText = emailAddress.value;
}

function setBottomText(){
    let select = document.getElementById("position");
    let bottomText = document.getElementById("bottom-text");
    bottomText.innerText = select.value;
}

function setBlockVisibility(showFirstBlock){
    let firstBlock = document.getElementById("first-block");
    let secondBlock = document.getElementById("second-block");
    firstBlock.style.display = showFirstBlock ? "" : "none";
    secondBlock.style.display = showFirstBlock ? "none" : "";
}

function onSingOutClick(){
    clearForm();
    setBlockVisibility(true);
}

function clearForm(){
    let firstName = document.getElementById("firstName");
    let secondName = document.getElementById("secondName");
    let middleText = document.getElementById("middle-text");
    let select = document.getElementById("position");
    let agreement = document.getElementById("agreement");
    let signIn = document.getElementById("signIn");
    firstName.value = '';
    secondName.value = '';
    emailAddress.value = '';
    select.value = 'Choose...';
    agreement.checked = false;
    signIn.setAttribute("disabled", "");
}