const elementos = [
    {tag: '1', texto: 'Frase 1'},
    {tag: '2', texto: 'Frase 2'},
    {tag: '3', texto: 'Frase 3'},
    {tag: '4', texto: 'Frase 4'},
]

for (let i = 0; i < elementos.length; i++){
    let { _, texto} = elementos[i];

    console.log(texto)
}