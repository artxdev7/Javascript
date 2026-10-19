var menu = document.querySelector('#menu')
var nav = document.querySelector('#hamburguer')
var Config = document.querySelector('#config')
var menuConfig = document.querySelector('#menuconfig')
var lanterna = document.querySelector('#lanterna')
var menuLanternas = document.querySelector('#menulanternas')
var closelanternas = document.querySelector('#closelanternas')
var close = document.querySelector('#close')
var dark = document.querySelector('#bt-dark')
var msg = document.querySelector('#res')
var user = localStorage.getItem("user")

msg.innerHTML = `seja bem vindo(a) <strong>${user}</strong> <br/> o arthur fez esse site`

menu.addEventListener("click", hamburguer);
function hamburguer() {
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "flex"
    } else {
        nav.style.display = "none"
    }
}

close.addEventListener("click", fechar)
function fechar() {
    menuConfig.style.display = "none"
}

Config.addEventListener("click", menuConfigura)
function menuConfigura() {
    if (menuConfig.style.display === "none" || menuConfig.style.display === "") {
        nav.style.display = "none"
        menuConfig.style.display = "flex"
    } else {
        menuConfig.style.display = "none"
    }
}

dark.addEventListener("click", darkmode)
function darkmode() {
    document.body.classList.toggle("darkmode")
    if (document.body.classList.contains("darkmode")) {
        dark.value = "Dark mode"
    }
    else {
        dark.value = "Light mode"
    }
}

lanterna.addEventListener("click", menulanternas)
function menulanternas() {
    if (menuLanternas.style.display === "none" || menuLanternas.style.display === "") {
        nav.style.display = "none"
        menuLanternas.style.display = "flex"
    } else {
        menuLanternas.style.display = "none"
    }
}

closelanternas.addEventListener("click", fecharL)
function fecharL() {
    menuLanternas.style.display = "none"
}

