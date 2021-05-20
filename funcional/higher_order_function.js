// Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as,
// são chamadas de higher-order functions.

function executar(fn, ...params){
    return function(textoInicial){
        return `${textoInicial} ${fn(...params)}!`

    }
}

function somar(a,b,c){
    return a + b + c
}

function mult(a,b){
    return a * b;
}

const r1 = executar(somar, 10,20,30)('The Result is precisely:')
const r2 = executar(mult, 3,5)('The Result is precisely:')
console.log(r1, '\n' + r2)