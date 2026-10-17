var botaoEnviar = document.querySelector('#e');
var email = document.querySelector('#email');

botaoEnviar.addEventListener("click", function (event) {

    if (email.value === "") {
        alert('insira seu nome')
    } else {
        event.preventDefault();
        var diemail = email.value;
        localStorage.setItem("usuario", diemail);
        alert("Valor guardado");
        window.location.href = "index.html";
    }


});