import { fetchUnidades, fetchDespesas } from '../services/api.js';
import { createHeader } from '../components/Header.js';
import { createFilterInput } from '../components/FilterInput.js';
import { createCardsContainer, updateCards } from '../components/Cards.js';
import { createUnitsTable } from '../components/UnitsTable.js';

export default async function HomePage() {
  const app = document.querySelector('#app');
  app.innerHTML = '';

  const container = document.createElement('div');
  container.id = 'main-container';

  // Header
  container.appendChild(createHeader());

  // Filter Input
  const input = createFilterInput(loadDespesas);
  container.appendChild(input);

  // Message container
  const messageContainer = document.createElement('div');
  messageContainer.id = 'message-container';
  container.appendChild(messageContainer);

  // Cards
  container.appendChild(createCardsContainer());

  // Units Table
  const unidades = await fetchUnidades();
  container.appendChild(createUnitsTable(unidades));

  app.appendChild(container);

  // Initial load
  input.value = [];
  await loadDespesas();

  async function loadDespesas() {
    const ug = input.value.trim();
    if (!ug) return;
    messageContainer.textContent = 'Carregando...';
    try {
      const despesas = await fetchDespesas({ ano: 2023, mes: 7, codigo_ug: ug });
      const únicas = Array.from(new Map(despesas.map(d => [d.num_doc, d])).values());
      const totalGastos = únicas.reduce((sum, d) => sum + Number(d.valor_emp), 0);
      updateCards({ totalGastos, quantidadeOrgaos: unidades.length, licitacoes: únicas.length });
      messageContainer.textContent = únicas.length ? '' : 'Nenhuma despesa encontrada para este órgão.';
    } catch (e) {
      console.error(e);
      messageContainer.textContent = 'Erro ao carregar dados. Tente novamente.';
    }
  }

  return container;
}