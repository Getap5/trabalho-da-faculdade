const iniciarBtn = document.getElementById('iniciarBtn');
const facilBtn = document.getElementById('facilBtn');
const medioBtn = document.getElementById('medioBtn');
const dificilBtn = document.getElementById('dificilBtn');
const mensagem = document.getElementById('mensagem');

function exibirMensagem(texto, cor) {
    mensagem.textContent = texto;    
    mensagem.style.color = cor;     
}

iniciarBtn.addEventListener('click', function() {
    exibirMensagem("Iniciando Jogo!", "white");
});

facilBtn.addEventListener('click', function() {
    exibirMensagem("Dificuldade: Fácil", "green");
});

medioBtn.addEventListener('click', function() {
    exibirMensagem("Dificuldade: Média", "orange");
});

dificilBtn.addEventListener('click', function() {
    exibirMensagem("Dificuldade: Difícil", "red");
});