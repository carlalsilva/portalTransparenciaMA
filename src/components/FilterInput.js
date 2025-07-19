export function createFilterInput(onEnter) {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'unit-code-input';
  input.placeholder = 'Pesquise o número da unidade';
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') onEnter();
  });
  return input;
}