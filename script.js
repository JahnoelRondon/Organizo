let container = document.getElementById("container");

let bgBtn = document.getElementById("bgSelect");
let body = document.querySelector("body");
let addBtn = document.getElementById("add");


const createBox = () => {
    //input
    let texField = document.createElement("input");
    texField.setAttribute("type", "text")
    texField.className = "inputstlye";
    texField.setAttribute("minlength", "4")
    texField.setAttribute("maxlength", "12")
    texField.setAttribute("name", "title")
    texField.setAttribute("placeholder", "Write here")

    //box
    let div = document.createElement("div");
    div.className = "box";

    div.appendChild(texField);
    container.appendChild(div);
}

addBtn.addEventListener("click", createBox);


// Theme
const formValue = () => {
    body.className = bgBtn.value;
}

bgBtn.addEventListener("change", formValue);

// use onchange event?
// am i supposed to add an event listener to all the options? doesnt seem right. 