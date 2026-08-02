// Sistema Simples de Favoritos (Portfólio Interativo)
let favoritesCount = 0;
const favCountBadge = document.getElementById('fav-count');

function toggleFavorite(id, button) {
    button.classList.toggle('active');
    
    // Altera o ícone de coração vazio para cheio
    const icon = button.querySelector('i');
    if (button.classList.contains('active')) {
        icon.classList.replace('fa-regular', 'fa-solid');
        favoritesCount++;
    } else {
        icon.classList.replace('fa-solid', 'fa-regular');
        favoritesCount--;
    }
    
    // Atualiza o contador na Navbar
    favCountBadge.textContent = favoritesCount;
}

// Alternar abas de busca (Comprar / Alugar)
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.tab-btn.active').classList.remove('active');
        button.classList.add('active');
    });
});