var nomeSalvo = JSON.parse(localStorage.getItem("usuario"));

if(nomeSalvo && nomeSalvo.nome){

    document.getElementById("Meu_nome").innerHTML = nomeSalvo.nome;

    document.getElementById("Meu_nome").href = "../Paginas/perfil.html"
}

function logado_verifica(){

    if(localStorage.getItem("logado") !== "true"){

        window.location.href = "login.html";
    }
}