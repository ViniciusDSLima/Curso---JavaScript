const array = [1,2,3];
array.push(4);
array[0] = 'luiz';
console.log(array);

const pessoa01 = {
    nome : "luiz",
    sobreNome: "Miranda",
    idade: 25,
}

console.log(pessoa01.nome);

function criaPessoa(nome, sobreNome, idade) {
    return {
        nome,
        sobreNome,
        idade
    }
}

const pessoa02 = criaPessoa('Vinicius', 'lima', 25);

console.log(pessoa02);
console.log(pessoa01)


