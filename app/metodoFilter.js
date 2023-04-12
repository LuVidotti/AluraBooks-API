const botoes = document.querySelectorAll('.btn');
const btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));
btnLivrosDisponiveis.addEventListener('click', filtrarLivrosDisponiveis);

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}

function filtrarLivrosDisponiveis() {
    let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0);
    exibirOsLivrosNaTela(livrosDisponiveis);
    exibirValorTotalDosLivrosDisponiveis(livrosDisponiveis, somarValorTotal(livrosDisponiveis));
}

function exibirValorTotalDosLivrosDisponiveis(livrosDisponiveis, valorTotal) {
    elementoValorTotalLivrosDisponiveis.innerHTML = `
    <section id="valor_total_livros_disponiveis">
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
    </div>
  </section>
    `
}

function somarValorTotal(livrosDisponiveis) {
    let valorTotal = 0;
    livrosDisponiveis.forEach(livro => {
        valorTotal = valorTotal + livro.preco;
    })
    return valorTotal;
}