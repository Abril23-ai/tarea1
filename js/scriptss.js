
function Saludar2()
{
    alert("Intentelo nuevamente");
}

function saludar() {
    alert("Correo Incorrecto");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miboton").addEventListener("click", function() {
        saludar();
        Saludar2();
    });
});

document.addEventListener("DomContentLoaded",function()
{
document.getElementById("mi_boton").addEventListener("Click", function()
{
Saludar();
Saludar2();
});


});