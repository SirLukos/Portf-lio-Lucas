// navbar fixa ao rolar
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 20);
});

// animação suave nos cards
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
});
