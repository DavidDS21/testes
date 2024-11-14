// QUESTÃO-01
// function dobro(a, b, c){
//     return 2 * a;
    
    
// }
// console.log(dobro(1123));

// QUESTÃO-02
// let x = prompt('Digite um número:')

// function parImpar(){
//     if (x % 2 == 0){
//         alert( x + ' é um número Par!')
//     } else {
//         alert( x + " é um número ímpar!")
//     }

// } 
//alert(parImpar(x))

//QUESTÃO-03
// let a = prompt('Digite um número:');
// let b = prompt('Digite um número:');


// function calcMedia(){
    
//     if (a && b > 0){
//         return eval((a + b)/2);
//     }  else {
//         return eval((a + b)/2);
//     }
// }
// alert(calcMedia(a, b));

function vogal() {
        let txt = document.getElementById('day').value;
        let vog = 0;
        for (i = 0; i < txt.length; i++) {
            if (txt[i] == 'a' || txt[i] == 'e' || txt[i] == 'i' || txt[i] == 'o' || txt[i] == 'u') {
                vog++;
                console.log(txt[i] + ' -É uma vogal!');
            }else {
                console.log(txt[i] + ' -Não é uma vogal! ');
            }    
        }
        document.getElementById('night').innerHTML = txt + vog;
    }
    