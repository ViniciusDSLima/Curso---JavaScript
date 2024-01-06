console.log('Luiz' && 'oi' && 'Maria')

function falaOi() {
    return 'Oi'
}

const vaiExecutar = true;

console.log(vaiExecutar && falaOi())

let executa;

console.log(executa && falaOi())

console.log(0 || false || null || 'Luiz Otávio' || true);

const corUsuario  = null;

const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

//retorna o NaN ja que eh o ultimo valor falso da comparacao;
console.log(a || b || c || d || e)

