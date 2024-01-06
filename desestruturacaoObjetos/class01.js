const pessoa =  {
  nome: "Luiz",
  sobreNome: "Carlos",
  idade: 18,
  endereco : {
        rua: 'Rua 18',
        numero: 320
    }
};

const {  idade, endereco: {rua, numero}, ...resto}  = pessoa;

console.log( idade, rua, numero)
console.log(resto)