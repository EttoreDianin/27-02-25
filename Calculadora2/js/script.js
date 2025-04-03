function expressao(parametro) {

    document.getElementById('display').value += parametro;
}

function resultado() {

    try {
        let expressao = document.getElementById('display').value;
        let resultado = eval(expressao);
        document.getElementById('display').value = resultado;
    } catch (error) {
        document.getElementById('display').value = "deixa de ser burro, SEU MERDA!!!";
        
    }
}

function limpar() {
    document.getElementById('display').value = "";
}