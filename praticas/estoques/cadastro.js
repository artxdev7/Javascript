
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

        let produto = {
            nome: nomepro,
            valor: valorpro,
            quantidade: quantidadepro
        }
        localStorage.setItem("produtosSalvos", JSON.stringify(produto))
        alert("Produto cadastrado com sucesso!")
    }



}