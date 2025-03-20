function Saludar()
{
    alert("No saben programar");
}

function Saludar2()
{
    alert("mama huevo");
}

function saludar() {
    alert("Hola mundo");
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