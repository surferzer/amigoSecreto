// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[]

function agregarAmigo() {
    let nombre = document.getElementById("amigo");    

    
    if (nombre.value === "") {
        alert("Por favor, inserte un nombre.");
        return; 
    }


    amigos.push(nombre.value);
    actualizarListaDeAmigos() 
    nombre.value = "";
}

function actualizarListaDeAmigos() {
    let listaAmigosHTML = document.getElementById("listaAmigos"); // Obtener la lista HTML

    // Limpiar la lista antes de actualizar
    listaAmigosHTML.innerHTML = "";

    // Recorrer el arreglo de amigos y agregar cada uno a la lista
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosHTML.appendChild(li);
    });
}



function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }


    let random = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[random];

    let elegido = document.getElementById("resultado");
    elegido.innerHTML = "El amigo sorteado es: " + amigoSorteado;


}
