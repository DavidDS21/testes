function ver() {
    
    for (i = 100; i < 200; i++){
        
        if (i % 2 == 1) {
            console.log(i)
            document.getElementById('test').innerHTML = i;
        } else {
            document.getElementById('test').innerHTML = 'Deu errado!'
        }
    }
}