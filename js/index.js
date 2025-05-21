function saludar(){
    var nombre = document.getElementById("textoNombre").value;
    var spnResultado = document.getElementById("spnResultado");
    var saludo = "Hola " + nombre + "!";
    spnResultado.innerHTML = saludo;
    console.log(saludo);
}
