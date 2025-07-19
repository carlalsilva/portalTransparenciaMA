export function createUnitsTable(unidades) {
  const container = document.createElement('div');
  container.id = 'units-table-container';

  const title = document.createElement('h2');
  title.textContent = 'Unidades';
  container.appendChild(title);

  const table = document.createElement('table');
  table.id = 'units-table';
  table.innerHTML = `
    <thead><tr><th>Orgão</th><th>Código</th><th>Sigla</th></tr></thead>
  `;

  const tbody = document.createElement('tbody');
  unidades.forEach(u => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${u.nome_amigavel}</td>
      <td>${u.codigo_unidade}</td>
      <td>${u.sigla_proposta}</td>
    `;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  container.appendChild(table);

  return container;
}