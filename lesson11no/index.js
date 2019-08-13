
let chek = document.getElementById("check");
let textBox = document.getElementById("task");

function addChekbox() {
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("onclick", "removeChekbox()")
    label.innerHTML = textBox.value;
    label.appendChild(input)
    chek.appendChild(label);
    textBox.value = "";
}

function removeChekbox() {
    if (chek.children.length > 1) {
        event.target.parentElement.parentElement.removeChild(event.target.parentElement);
    }
}