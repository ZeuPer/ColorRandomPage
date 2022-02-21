var a = document.getElementById("cuerpo");
var b = document.getElementById("nombreColor");
var boton = document.getElementById("boton");
var contain = document.getElementById("container");

function ToHexadecimal(numero) {
    var hexadecimal = numero.toString(16);
    return hexadecimal;
}

function cambiarColor() {
    var color = "#";
    for(var i = 0; i < 6; i++) {
        var n = Math.floor(Math.random() * 15);
        color += ToHexadecimal(n);
    }

    b.innerHTML = color.toUpperCase();
    a.style.backgroundColor = color;
}

a.style.minHeight = "100vh";
a.style.display = "flex";
a.style.alignItems = "center";
a.style.justifyContent = "center";
b.style.fontFamily = "Dancing Script, cursive";

boton.onclick = cambiarColor;
contain.style.display = "block";
contain.style.textAlign = "center";

boton.style.fontFamily = "Arial, Helvetica, sans-serif";
boton.style.padding = "3px";
boton.style.fontSize = "1.5em";
boton.style.borderRadius = "0.5em";
boton.style.backgroundColor = "rgb(0, 0, 0)";
boton.style.color = "rgb(255, 255, 255)";
boton.style.cursor = "pointer";

cambiarColor();