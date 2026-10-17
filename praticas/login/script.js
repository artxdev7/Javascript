var menu = document.querySelector('#menu')
var nav = document.querySelector('#hamburguer')
var Config = document.querySelector('#config')
var menuConfig = document.querySelector('#menuconfig')
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
}