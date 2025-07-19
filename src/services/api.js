// src/api.js
const API_BASE = '/api';

export async function fetchUnidades() {
  const res = await fetch(`${API_BASE}/consulta-unidades`)
  if (!res.ok) throw new Error(`Status HTTP ${res.status}`)
  const data = await res.json()
  //console.log('📦 dados brutos de fetchUnidades:', data)
  // data já é um array de objetos [{ codigo_unidade, nome_amigavel, sigla_proposta }, …]
  return data
}

export async function fetchDespesas({ ano, mes, codigo_ug }) {
  const params = new URLSearchParams({
    ano: String(ano),
    codigo_ug: String(codigo_ug),
  });
  if (mes != null) params.append('mes', String(mes));

  const res = await fetch(`${API_BASE}/consulta-despesas?${params}`);
  if (!res.ok) throw new Error(`Status HTTP ${res.status}`);

  const data = await res.json();
  //console.log('📦 dados brutos de fetchDespesas:', data);
  // Supondo que seja um array, retornamos direto; se vier dentro de alguma chave, ajustamos depois:
  return Array.isArray(data) ? data : data.despesas || data.resultados || [];
}
