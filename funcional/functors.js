// Functors são objetos que implementam a função MAP
// que também é um "wrapper" de um valor
// Array é um exemplo de Functor

// const nums = [1,2,3,4,5,6]
// const novosNums = nums
// .map( el => el + 10)
// .map( el => el * 2)

// console.log(nums, novosNums) 


function TipoSeguro(valor){
    return {
        valor,
        invalido(){
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if(this.invalido()){
                return TipoSeguro(null)
            }else{

                const novoValor = fn(this.valor)
                return TipoSeguro(fn(novoValor))
            }
        },
        flatMap(fn) {
          return this.map(fn).valor
        },
    }
}

const resultado = TipoSeguro('Esse é um texto')
.map(t => t.toUpperCase())
.map(t => `${t}!!!`)
.flatMap(t => t.split('').join(' '))

console.log(resultado)