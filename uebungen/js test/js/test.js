function addbox1(){
    const box = document.createElement("div");
    box.classList.add("new-box");

    const casten = document.getElementById("box1");
    casten.appendChild(box);
}

function addbox2(){
    const box = document.createElement("div");
    box.classList.add("new-box");

    const casten = document.getElementById("box2");
    casten.appendChild(box);
}



const chblue = document.getElementById("blue");
chblue.addEventListener("click", changeToBlue);

const chgreen = document.getElementById("green");
chgreen.addEventListener("click", changeToGreen);

function changeToBlue(){
    var valch = document.getElementById("box3");
    valch.style.backgroundColor = "blue";
}

function changeToGreen(){
    var valch = document.getElementById("box3");
    valch.style.backgroundColor = "#34eb34";
}

const backgroundElement = document.getElementById("inner1-2");
const colorInput = document.getElementById("farbew");

colorInput.addEventListener("change", function() {
    const pickedcolor = colorInput.value;
    backgroundElement.style.backgroundColor = pickedcolor;
    }
);


const btn = document.getElementById("newbox");
btn.addEventListener("click", erstellen)

function erstellen(){
    var box = document.createElement()
}

var outerboxen = document.getElementsByClassName("outer-box");

