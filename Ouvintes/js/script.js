const mensagem = document.getElementById('mensagens');
const botao = document.getElementById('cuzinhodoramon');

botao.addEventListener('click', imprimir);
botao.addEventListener('mouseover',
    function () {
        mensagem.textContent = "Você passou  no Cu do Ramon"
    }
);
function imprimir() { mensagem.textContent = "Você clicou no Cu do Ramon"; }