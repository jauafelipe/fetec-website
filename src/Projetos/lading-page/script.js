// Interatividade da seleção de tamanhos
const sizeButtons = document.querySelectorAll('.size-btn');

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a seleção ativa de qualquer outro botão
        document.querySelector('.size-btn.active').classList.remove('active');
        // Adiciona à escolha atual
        button.classList.add('active');
    });
});

// Gatilho de conversão simulado
function triggerConversion() {
    const selectedSize = document.querySelector('.size-btn.active').textContent;
    alert(`Sucesso! Redirecionando para o Gateway de pagamento com o item tamanho ${selectedSize}. Evento disparado no Pixel do Portfólio!`);
}