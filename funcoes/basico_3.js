// arrow function
const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal()

const saudacao = nome => `Fala ${nome}, blz?!?`
console.log(saudacao("Gui")) 


const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0;
    for(let n of numeros){
        total += n;
    }

    return total
}

 const potencia = base => exp =>  Math.pow(base,exp)



 console.log(potencia(2)(12))
console.log(somar(1,2,3,4))
console.log(somar(1,2,3,4,5,6,7,8,9,10))

// this
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function() {
    console.log(this[0])
}
const numeros = [2 ,5 ,6,8]
 numeros.ultimo()
 numeros.primeiro()


