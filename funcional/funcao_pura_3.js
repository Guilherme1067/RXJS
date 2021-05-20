
// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

let quantidade = 0
function somar(a,b){
    quantidade ++; // Efeito colateral observável   // Altera algo que está fora da função
    return a+b;
}

console.log(`A quantidade: ${quantidade}`)
console.log(somar(56,22))
console.log(somar(56,22))
console.log(somar(56,22))
console.log(somar(56,22))
console.log(somar(56,22))
console.log(`A quantidade: ${quantidade}`)

