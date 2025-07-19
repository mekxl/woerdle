let palavraSecreta = '';
let letrasUsadas = [];

function escolherPalavra() {
    const indice = Math.floor(Math.random() * palavras.length);
    palavraSecreta = palavras[indice];
    mostrarPalavra();
}

function mostrarPalavra() {
    const palavraExibida = palavraSecreta.split('').map(letra => {
        return letrasUsadas.includes(letra) ? letra : '_';
    }).join(' ');

    document.getElementById('palavra-exibida').innerText = palavraExibida;
}

function adicionarLetra(letra) {
    if (!letrasUsadas.includes(letra)) {
        letrasUsadas.push(letra);
        mostrarLetrasUsadas();
        mostrarPalavra();
    }
}

function mostrarLetrasUsadas() {
    const letrasDiv = document.getElementById('letras-usadas');
    letrasDiv.innerText = letrasUsadas.join(', ');
}

document.getElementById('btn-entrar').addEventListener('click', () => {
    const letra = prompt('Digite uma letra:');
    if (letra && letra.length === 1) {
        adicionarLetra(letra.toLowerCase());
    }
});

escolherPalavra();
