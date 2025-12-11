/* ====== Estilos Globais ====== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background: #f5f5f5;
    color: #222;
    line-height: 1.6;
    padding-bottom: 40px;
}

/* ====== Cabeçalho ====== */
.header {
    text-align: center;
    padding: 40px 20px;
    background: #222;
    color: white;
}

.header h1 {
    font-size: 2.4rem;
    margin-bottom: 10px;
}

.header p {
    font-size: 1rem;
    opacity: 0.8;
}

/* ====== Seções ====== */
section {
    width: 90%;
    max-width: 800px;
    margin: 40px auto;
}

h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 20px;
}

/* ====== Cartões de Projeto ====== */
.project-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 14px rgba(0,0,0,0.15);
}

.project-card h3 {
    margin-bottom: 10px;
}

/* ====== Rodapé ====== */
.footer {
    text-align: center;
    padding: 20px;
    margin-top: 30px;
    background: #222;
    color: white;
    font-size: 0.9rem;
}
