// Interatividade de Menu Ativo
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active de todos
        document.querySelector('.menu-item.active').classList.remove('active');
        // Adiciona ao clicado
        this.classList.add('active');
    });
});

// Simulação de Clique para "Criar Novo Item"
const newBtn = document.querySelector('.btn-primary-nike');
newBtn.addEventListener('click', () => {
    alert('Ação simulada para portfólio: Abrir modal de cadastro de imóvel/produto.');
});