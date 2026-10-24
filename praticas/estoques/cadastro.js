
let submit = document.querySelector('#submit')

submit.addEventListener("click", cadastro)
function cadastro(event) {
    event.preventDefault()
    let nomepro = document.querySelector('#nomepro').value
    let valorpro = Number(document.querySelector('#valorpro').value)
    let quantidadepro = Number(document.querySelector('#quantidadepro').value)
    if (nomepro === "" || valorpro === 0) {
        alert('[ERROR] Verifique novamente')
    } else {
        let produtosSalvos = JSON.parse(localStorage.getItem("produtosSalvos")) || [];

        let produto = {
            nome: nomepro,
            valor: valorpro,
            quantidade: quantidadepro
        }

        produtosSalvos.push(produto)
        localStorage.setItem("produtosSalvos", JSON.stringify(produtosSalvos))
        alert("Produto cadastrado com sucesso!")
        window.location.href = "produtos.html"
    }



}

let nav = document.querySelector('#hamburguer')
let menu = document.querySelector('#menu')

menu.addEventListener("click", function menus() {
    if (nav.style.display == "none" || nav.style.display == "") {
        nav.style.display = "flex"
    } else {
        nav.style.display = "none"
    }
})