function soma(){
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let soma = n1 + n2;
    document.getElementById('res').innerHTML = soma;
}
function sub(){
    let n3 = document.getElementById('num1').value;
    let n4 = document.getElementById('num2').value;
    let sub = n3 - n4;
    document.getElementById('res').innerHTML = sub;
}
function mult(){
    let n5 = document.getElementById('num1').value;
    let n6 = document.getElementById('num2').value;
    let mult = n5 * n6;
    document.getElementById('res').innerHTML = mult;
}
function divi(){
    let n7 = document.getElementById('num1').value;
    let n8 = document.getElementById('num2').value;
    let divi = n7 / n8;
    document.getElementById('res').innerHTML = divi;
}
function mode(){
    document.body.style.background = '#000000'
}

function mod(){
    document.body.style.background = '#ffffff'
}
function cor(){
    document.getElementById('cx1').style.background = '#f0ffff'
    document.getElementById('h2').style.color = '#000000'
    document.getElementById('p').style.color = '#000000'
    document.getElementById('res').style.color = '#000000'
}
//#a9a9a9
function core(){
    document.getElementById('cx1').style.background = '#1e1e1e'
    document.getElementById('h2').style.color = '#a9a9a9'
    document.getElementById('p').style.color = '#a9a9a9'
    document.getElementById('res').style.color = '#a9a9a9'
}
