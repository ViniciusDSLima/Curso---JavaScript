const numeros = [1,2,3,4,5,6,7,8,9];

const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);

console.log(resto)

const [primeiro, , segundo, , terceiro] = numeros;

console.log(primeiro, segundo, terceiro)

const numeros2 = [ [1,2,3], [4,5,6], [7,8,9]];

const [primeiroArray, , terceiroArray] = numeros2;

console.log(primeiroArray, terceiroArray);

const [primeiroNumeroDoPrimeiroArray, ...restoDosNumerosDoPrimeiroArray] = primeiroArray;

console.log(primeiroNumeroDoPrimeiroArray);

console.log(restoDosNumerosDoPrimeiroArray);

//maneira mais facil
console.log(numeros2[1][2])