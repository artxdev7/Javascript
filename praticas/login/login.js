var usuario = document.querySelector('#user')
var enviar = document.querySelector('#submit')

enviar.addEventListener("click", informe)

function informe(event) {
    event.preventDefault()
    localStorage.setItem("user", usuario.value)
    window.location.href = "index.html"

}