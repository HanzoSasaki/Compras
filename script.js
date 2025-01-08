const productForm = document.getElementById('product-form');
const productInput = document.getElementById('product-input');
const productList = document.getElementById('product-list');
const totalAmount = document.getElementById('total-amount');

let total = 0;

productForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const productName = productInput.value.trim();

  if (productName === '') return;

  // Cria um novo item na lista
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${productName}</span>
    <input type="number" placeholder="Preço" step="0.01" min="0">
    <button class="delete-btn">Excluir</button>
  `;

  // Adiciona funcionalidade para editar o preço
  const priceInput = listItem.querySelector('input');
  priceInput.addEventListener('input', () => {
    calculateTotal();
  });

  // Adiciona funcionalidade para excluir o item
  const deleteBtn = listItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    productList.removeChild(listItem);
    calculateTotal();
  });

  productList.appendChild(listItem);
  productInput.value = '';
});

// Calcula o total
function calculateTotal() {
  total = 0;

  const priceInputs = productList.querySelectorAll('input');
  priceInputs.forEach((input) => {
    const price = parseFloat(input.value) || 0;
    total += price;
  });

  totalAmount.textContent = total.toFixed(2);
}
