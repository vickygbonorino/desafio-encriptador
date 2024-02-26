const campoTexto = document.querySelector("#cajatexto");

const campoMensaje = document.querySelector("#container-resultado");

const reemplazos = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
    
];

//Encriptar

function btnEncriptar() {
    const texto = encriptar(campoTexto.value);

    //Mostrar el resultado en pantalla
    campoMensaje.value = texto; 
}

function encriptar(textoEncriptado){
    let texto = textoEncriptado;

    for(let i=0; i < reemplazos.length; i++){
        const letra = reemplazos[i][0];
        const reemplazo = reemplazos[i][1]

        const regex = new RegExp(letra, 'g');
        texto = texto.replace(regex, reemplazo);
    }

    return texto;
}

//Desencriptar

function btnDesencriptar() {
    const texto = desencriptar(campoTexto.value);

    //Mostrar el resultado en pantalla
    campoMensaje.value = texto; 
}

function desencriptar(textoEncriptado){
    let texto = textoEncriptado;

    for(let i=0; i < reemplazos.length; i++){
        const letra = reemplazos[i][0];
        const reemplazo = reemplazos[i][1]

        const regex = new RegExp(reemplazo, 'g');
        texto = texto.replace(regex, letra);
    }

    return texto;
}

//reemplaza el nuñeco por el texto encriptado

function ocultarElemento() {
    var elemento = document.getElementById("imagenDerecha");

    if (elemento.style.display !== "none") {
        elemento.style.display = "none";
    } 
}

//Copiar

function copiarTexto() {
    var texto = document.getElementById("container-resultado").value;

    navigator.clipboard.writeText(texto)
        .then(() => {
        // Mensaje de exito
        alert("Texto copiado al portapapeles");
        }).catch(err => {
                // Mensaje de error
                console.error('Error al copiar el texto: ', err);
                });
}