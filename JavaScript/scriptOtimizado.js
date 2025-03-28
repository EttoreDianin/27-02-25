function lerNumero1(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    return numero1
}

function lerNumero2(){
    var numero2 = parseFloat(document.getElementById('numero2').value);
    return numero2
}

function somar(){
    let resultado = lerNumero1() + lerNumero2();
    document.getElementById('resultado').innerText = resultado.toFixed(2);
}
function subtrair(){
    let resultado = lerNumero1() - lerNumero2();
    document.getElementById('resultado').innerText = resultado.toFixed(2);
}

function multiplicar(){
    let resultado = lerNumero1() * lerNumero2();
    document.getElementById('resultado').innerText = resultado.toFixed(2);
}

function dividir(){
    if(numero2 === 0){
        document.getElementById('resultado').innerText = "Não é possível dividir por zero";
    } else {
        let resultado = lerNumero1() / lerNumero2();
        document.getElementById('resultado').innerText = resultado.toFixed(2);
    }
}
