// let txt = 'delete';
// let vog = 0;
// for (i = 0; i < txt.length; i++) {
//     if (txt[i] == 'a' || txt[i] == 'e' || txt[i] == 'i' || txt[i] == 'o' || txt[i] == 'u') {
//         vog++;
//         console.log(txt[i] + ' -É uma vogal!');
//     }else {
//         console.log(txt[i] + ' -Não é uma vogal! ');
//     }    
//     }




// function vogal() {
//     let txt = document.getElementById('day').value;
//     let vog = 0;
//     for (i = 0; i < txt.length; i++) {
//         if (txt[i] == 'a' || txt[i] == 'e' || txt[i] == 'i' || txt[i] == 'o' || txt[i] == 'u') {
//             vog++;
//             console.log(txt[i] + ' -É uma vogal!');
//         }else {
//             console.log(txt[i] + ' -Não é uma vogal! ');
//         }    
//     }
//     document.getElementById('night').innerHTML = txt + vog;
// }


function verifica() {
    let txt = document.getElementById('day').value;
    let vog = 0;
    for (i = 0; i < txt.length; i++) {
        if (
            txt[i] == 'A' || txt[i] == 'a' ||
            txt[i] == 'E' || txt[i] == 'e' ||
            txt[i] == 'I' || txt[i] == 'i' ||
            txt[i] == 'O' || txt[i] == 'o' ||
            txt[i] == 'U' || txt[i] == 'u' 
        ) {
            vog++;
            
            console.log(txt[i] + ' -É uma vogal!');
    }    else {
            console.log(txt[i] + ' -Não é uma vogal! ');
    }
    document.getElementById('night').innerHTML = 'A sua palavra tem ' + vog + " vogais!" ;
    
    
}
}
function apg() {
    document.getElementById('night').innerHTML = '</br>'
    

}


























    //let vog = 0;
    //for (i = 0; i < txt.length; i++){
    //    if (txt[i] == 'a') {
    //        vog =+ 1;
    //    } else if (txt[i] == 'e') {
    //        vog =+ 1;
    //    } else if (txt[i] == 'i') {
    //        vog =+ 1;
    //    } else if (txt[i] == 'o') {
    //        vog =+ 1;
    //    } else if (txt[i] == 'u') {
    //        vog =+ 1;
    //    } else {
    //        vog = 0;
    //    }
    //    console.log(vog)
