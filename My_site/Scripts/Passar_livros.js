var imagens = ["../imgs/YOU.jpg",
    "../imgs/emily_dickn.jpg",
    "../imgs/billy_summers.jpg",
    "../imgs/Dias-perfeitos.jpg",
    "../imgs/Peacock.jpg",
    "../imgs/1984.jpg"
];

let indice = 0;

document.getElementById("btn-trocar").addEventListener("click", () => {
    indice = (indice + 1) % imagens.length; // avança e reinicia no fim
    document.getElementById("imagem-livro").src = imagens[indice];
});