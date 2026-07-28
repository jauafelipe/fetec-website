// Armazenamento do Carrinho em Memória
let cart = [];

// Seleção de Elementos DOM
const cartToggle = document.getElementById('cart-toggle');
const cartClose = document.getElementById('cart-close');
const cartSidebar = document.getElementById('cart-sidebar');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartSidebarCount = document.getElementById('cart-sidebar-count');
const cartTotalValue = document.getElementById('cart-total-value');

// Eventos de abrir e fechar o carrinho lateral
cartToggle.addEventListener('click', () => cartSidebar.classList.add('open'));
cartClose.addEventListener('click', () => cartSidebar.classList.remove('open'));

// Adicionar produto ao carrinho
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const id = card.getAttribute('data-id');
        const name = card.getAttribute('data-name');
        const price = parseFloat(card.getAttribute('data-price'));

        addItemToCart(id, name, price);
        cartSidebar.classList.add('open'); // Abre automaticamente ao adicionar
    });
});

function addItemToCart(id, name, price) {
    // Verifica se o item já está no carrinho
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCartUI();
}

// Atualizar a interface do Carrinho
function updateCartUI() {
    // Contador da sacola
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartSidebarCount.textContent = totalItems;

    // Renderizar itens
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-message">Sua sacola está vazia.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name} (x${item.quantity})</h4>
                    <p>R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                    <button class="remove-item" onclick="removeItemFromCart('${item.id}')">Remover</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    // Calcular Valor Total
    const totalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalValue.textContent = `R$ ${totalValue.toFixed(2).replace('.', ',')}`;
}

// Função global para remover item (chamada via onclick no HTML dinâmico)
window.removeItemFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
};