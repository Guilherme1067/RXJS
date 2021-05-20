function eager(a,b){
    // processamento mais pesado
    const fim = Date.now() + 2500
    while(Date.now() < fim){}

    const valor = Math.pow(a,3)
    return valor + b;
}


function lazy(a){
    // processamento mais pesado
    const fim = Date.now() + 2500
    while(Date.now() < fim){}
    return function (b){
        console.log(Date.now())
        const valor = Math.pow(a,3)
        return valor + b;
    }
}


// console.time('#1')
// console.log(eager(3,100))
// console.log(eager(3,200))
// console.log(eager(3,300))
// console.timeEnd('#1')


console.time('#2')
const resultado = lazy(3)
console.log(resultado(100))
console.log(resultado(200))
console.log(resultado(300))
console.timeEnd('#2')
