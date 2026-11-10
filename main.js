const jogos = [
    {
        nome: "Minecraft",
        categoria: "Aventura",
        plataforma: "PC",
        preco: 99.90
    },
    {
        nome: "GTA V",
        categoria: "Ação",
        plataforma: "PlayStation",
        preco: 149.90
    },
    {
        nome: "God of War",
        categoria: "Ação",
        plataforma: "PlayStation",
        preco: 199.90
    },
    {
        nome: "FIFA 25",
        categoria: "Esporte",
        plataforma: "Xbox",
        preco: 249.90
    },
    {
        nome: "The Sims 4",
        categoria: "Simulação",
        plataforma: "PC",
        preco: 89.90
    },
    {
        nome: "Resident Evil 4",
        categoria: "Terror",
        plataforma: "PC",
        preco: 179.90
    },
    {
        nome: "Mario Kart 8",
        categoria: "Corrida",
        plataforma: "Nintendo Switch",
        preco: 229.90
    },
    {
        nome: "Red Dead Redemption 2",
        categoria: "Aventura",
        plataforma: "Xbox",
        preco: 199.90
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let jogo of jogos) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${jogo.nome}</td>
        <td>${jogo.categoria}</td>
        <td>${jogo.plataforma}</td>
        <td class="preco">${jogo.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</td>
    `;

    corpoTabela.appendChild(linha);
}