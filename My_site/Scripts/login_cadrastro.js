function cadastro() {

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (nome && email && senha) {

        const usuario = {
            nome,
            email,
            senha
        }

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Cadastro feito com sucesso")

        window.location.href = "login.html";
    }
    else {
        alert("Preencha todos os campos.");
    }
}

function login() {

    var email = document.getElementById("email").value;

    var senha = document.getElementById("senha").value;

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioSalvo && usuarioSalvo.email === email && usuarioSalvo.senha === senha) {

        alert("Login bem-sucedido! Bem-vindo(a), " + usuarioSalvo.nome);

        localStorage.setItem("logado", "true");

        window.location.href = "index_logado.html";
    } else {
        alert("Email ou senha incorretos!");
    }


}
