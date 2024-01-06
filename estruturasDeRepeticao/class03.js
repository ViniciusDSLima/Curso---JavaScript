const nomes = [ 'Luiz', 'Marcelo', 'Henrique' ]

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

console.log('----------------------------')

for(let indice in nomes){
    console.log(nomes[indice])
}
console.log('-------------------------')


for(let valor of nomes){
    console.log(valor)
}

