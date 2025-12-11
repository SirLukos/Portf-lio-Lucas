console.log("Portfólio carregado com sucesso!");

window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".project-card").forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.5s ease";
});
