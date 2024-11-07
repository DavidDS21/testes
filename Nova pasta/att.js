let i = document.getElementById('um').value;
let d = document.getElementById('dois').value;
let o = document.getElementById('tres').value;
let k = document.getElementById('quatro').value;
let x = document.getElementById('cinco').value;
function veri() {
    if (i > d && i > o && i > k && i > x) {
        document.getElementById('maior').innerHTML = i + 'É o maior número!';
    }
    
    else if (d > i && d > o && d > k && d > x) {
        document.getElementById('maior').innerHTML = d + 'É o maior número!';
    }
    
    else if (o > i && o > d && o > k && o > x) {
        document.getElementById('maior').innerHTML = o + 'É o maior número!';
    }
    
    else if (k > i && k > d && k > o && k > x) {
        document.getElementById('maior').innerHTML = k + 'É o maior número!';
    }
    
    else{
        document.getElementById('maior').innerHTML = x + 'É o maior número!';
    }
    // if (i > d && i > o && i > k && i > x) {
    //     document.getElementById('menor').innerHTML = i + 'É o maior número!';
    // }
    
    // else if (d > i && d > o && d > k && d > x) {
    //     document.getElementById('menor').innerHTML = i + 'É o maior número!';
    // }
    
    // else if (o > i && o > d && o > k && o > x) {
    //     document.getElementById('menor').innerHTML = i + 'É o maior número!';
    // }
    
    // else if (k > i && k > d && k > o && k > x) {
    //     document.getElementById('menor').innerHTML = i + 'É o maior número!';
    // }
    
    // else if (x > i && x > d && x > o && x > k) {
    //     document.getElementById('menor').innerHTML = i + 'É o maior número!';
    // }
    
}