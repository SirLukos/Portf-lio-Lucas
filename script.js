// Animação ao rolar a página
const cards = document.querySelectorAll(".card");

function revealCards() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealCards);

// Estado inicial
cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(25px)";
    card.style.transition = "0.5s ease";
});

console.log("Site carregado!");
