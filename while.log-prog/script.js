let i = document.getElementById('num1').value;
function soma() {
    if (i==0) {
        document.getElementById('res').innerHTML = ''
    } else {
        while (i > 0 && i < 0) {
            document.getElementById('res').innerHTML = 'Soma:' + i;
            i ++

        }
    }
}