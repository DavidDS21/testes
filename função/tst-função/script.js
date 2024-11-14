let a = document.getElementById('1').value;
let b = document.getElementById('2').value;
let op =  document.getElementById('3').value;


function calc(){
    if (op === 1){
        document.getElementById('res').innerHTML = a + b;    
    } else if (op === 2){
        document.getElementById('res').innerHTML = a - b;
    } else if (op === 3){
        document.getElementById('res').innerHTML = a * b;
    } else if (op == 4){
        if (b !== 0){
            document.getElementById('res').innerHTML = a / b;
        } else {
            return 'Erro: divisão por zero!'
        }
    } else {
        return 'Operação inválida!'
    }
    
} 
