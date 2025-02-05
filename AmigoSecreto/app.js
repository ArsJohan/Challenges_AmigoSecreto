// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;

    if (amigo == ""){
        alert("Ingresa un nombre valido");
        return;
    }

    listaAmigos.innerHTML += `<li>${amigo}</li>`;
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    resultado.innerHTML = "";
}

function sortearAmigo(){

    if(amigos.length ==0){
        alert("Agrega al menos un amigo");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    resultado.innerHTML = amigoSorteado;
    listaAmigos.innerHTML = "";
    amigos = [];


}