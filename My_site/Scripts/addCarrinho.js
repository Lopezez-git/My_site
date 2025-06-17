function adicionarAoCarrinho(idLivro) {
  // Pega carrinho atual ou array vazio
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Verifica se já existe esse livro no carrinho
  const index = carrinho.findIndex(item => item.id === idLivro);

  if (index !== -1) {
    // Já existe, só aumenta a quantidade
    carrinho[index].quantidade += 1;
  } else {
    // Adiciona novo
    carrinho.push({ id: idLivro, quantidade: 1 });
  }

  // Salva no localStorage
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Livro adicionado ao carrinho!");
}

