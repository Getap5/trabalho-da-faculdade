const logarBtn = document.getElementById('logarBtn');

function exibirMensagem(texto, cor) {
    mensagem.textContent = texto;    
    mensagem.style.color = cor;
    mensagem.style.display = "block";
    
    setTimeout(function() {
        mensagem.style.display = "none";
    }, 2000);  
}

logarBtn.addEventListener('click', function() {
    exibirMensagem("logado", "white");
});