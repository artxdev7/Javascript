var botaoEnviar = document.querySelector('#e');
var email = document.querySelector('#email');
var senha = document.querySelector('#password');

botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    if (email.value !== "" && senha.value !== "") {
        var diemail = email.value;
        var disenha = senha.value;

        localStorage.setItem("usuario", diemail);
        localStorage.setItem("senha", disenha);

        alert("Valor guardado");
        window.location.href = "index.html";
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});