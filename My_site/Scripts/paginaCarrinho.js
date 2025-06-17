fetch("../json-files/livros.json") // ajuste o caminho se necessário
    .then(res => res.json())
    .then(livros => {
        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        if (carrinho.length === 0) {
            document.getElementById("lista-carrinho").innerHTML = "<p>Carrinho vazio.</p>";
            return;
        }

        let html = "";
        let total = 0;

        carrinho.forEach(item => {
            const livro = livros.find(l => l.id == item.id); // "==" compara número com string

            if (!livro) {
                console.warn("Livro não encontrado:", item);
                return;
            }

            const subtotal = livro.preco * item.quantidade;
            total += subtotal;

            html += `
        <div>
          <h3>${livro.titulo}</h3>
          <img src = "${livro.imagem}">
          <p>Preço: R$ ${livro.preco.toFixed(2)}</p>
          <p>Quantidade: ${item.quantidade}</p>
          <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
          <button onclick="removerDoCarrinho(${livro.id})">Remover</button>
          <hr>
        </div>
      `;
        });

        document.getElementById("lista-carrinho").innerHTML = html;
        document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;
    });

function removerDoCarrinho(idLivro) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho = carrinho.filter(item => item.id !== idLivro);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    location.reload(); // recarrega a página pra atualizar
}
