function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id'); // retorna "1" ou "2" etc.
}

async function fetchLivros() {
  const response = await fetch('../json-files/livros.json');
  const livros = await response.json();
  return livros;
}

async function mostrarLivro() {
  const id = getIdFromUrl();
  const livros = await fetchLivros();

  // Procura o livro com o id certo
  const livro = livros.find(l => l.id == id);

  if (!livro) {
    alert("Livro não encontrado!");
    return;
  }

  document.getElementById("book-name").innerHTML = livro.titulo;

  document.getElementById("imagem-livro").src = livro.imagem;

  document.getElementById("sinopse").innerHTML = livro.sinopse;

  document.getElementById("preco").innerHTML = "R$" + livro.preco;

  document.getElementById("paginas").innerHTML = "Páginas: " + livro.paginas;

  document.getElementById("idioma").innerHTML = "Idioma: " + livro.idioma;

  document.getElementById("dataPublica").innerHTML = "Publicação: " + livro.dataPublica;

  document.getElementById("editora").innerHTML = "Editora: " + livro.editora;

  document.getElementById("autor").innerHTML = "Autor(a): " + livro.autor;

  document.getElementById("imagemAutor").src = livro.imagemAutor;

  document.getElementById("biografiaAutor").innerHTML = livro.biografiaAutor
}

window.onload = mostrarLivro;