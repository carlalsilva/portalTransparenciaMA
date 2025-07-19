export function createCardsContainer() {
  const container = document.createElement('div');
  container.className = 'cards-container';
  container.innerHTML = `
    <div class="card">
      <div class="card__title total-gastos">Total de Gastos</div>
      <div class="card__value total-valor"></div>
    </div>
    <div class="card">
      <div class="card__title qtd-orgaos">Quantidade de Órgãos</div>
      <div class="card__value qtd-orgaos-valor"></div>
    </div>
    <div class="card">
      <div class="card__title licitacoes">Licitações</div>
      <div class="card__value licitacoes-valor"></div>
    </div>
  `;
  return container;
}

export function updateCards({ totalGastos, quantidadeOrgaos, licitacoes }) {
  document.querySelector('.total-valor').textContent = totalGastos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.querySelector('.qtd-orgaos-valor').textContent = quantidadeOrgaos;
  document.querySelector('.licitacoes-valor').textContent = licitacoes;
}