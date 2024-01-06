const hora = 19;

// if(hora > 12 && hora <  18){
//     console.log('Boa tarde')
// } else if(hora < 12){
//     console.log('Bom dia')
// } else if( hora > 18){
//     console.log("boa noite")
// }

function saudacao(hora){
    if(hora < 12){
      return 'Bom dia'
    } else if(hora >= 12 && hora <= 18) {
        return 'Boa tarde'
    } else {
        return 'Boa noite'
    }
}

console.log(saudacao(12))