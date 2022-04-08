var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("root");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";  // background: linear-gradient(to right, red , yellow)

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function printCss(){
    var css1 = color1.value;
    var css2 = color2.value;

    css.innerHTML("background: linear-gradient(to right, " + css1 + ",  " + css2 + " )")
}
