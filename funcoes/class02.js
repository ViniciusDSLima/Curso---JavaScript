function funcao({nome, sobreNome, idade}) {
    console.log(nome,sobreNome,idade)
}

funcao({
    nome: 'Luiz',
    sobreNome: 'Fernando',
    idade: 12
});

const  conta = (operador, acumulador, ...numeros) => {
    for (let numero of numeros){
        if(operador === '+') acumulador += numero;
    }
    console.log(acumulador)
}

conta('+', 0,20,30,40,50,60)