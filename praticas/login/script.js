var menu = document.querySelector('#menu');
var conteudo = document.querySelector('#conteudo');
var res = document.querySelector('#res')
var usuarioSalvo = localStorage.getItem("usuario")

menu.addEventListener("click", hamburguer);

res.innerHTML = `seja bem vindo(a) <strong>${usuarioSalvo}</strong>`

function hamburguer() {
    if (conteudo.style.display === "none" || conteudo.style.display === "") {
        conteudo.style.display = "flex";
    } else {
        conteudo.style.display = "none";
    }
}
