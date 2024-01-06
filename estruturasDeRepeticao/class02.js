const frutas = ["uva", "banana", "maca"];

for (fruta in frutas){
    console.log(frutas[fruta].toUpperCase())
}

console.log("-----------------------------------------------")

const pessoa = {
    nome: 'Vinicius',
    sobreNome: 'Lima',
    idade: 18
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}