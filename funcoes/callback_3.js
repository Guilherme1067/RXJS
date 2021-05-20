const numeros = [1,2,3,4,5,6]

const double = n => n * 2;


console.log(numeros.map(double))


const nomes = ['Ana', 'Bia', 'Gui', "Lia", 'Rafa']
const primeiraLetra = texto => texto[0];
const letras = nomes.map(primeiraLetra)
console.log(letras, nomes)


const carrinho = [
    {nome:'Caneta', qtde: 10, preco: 7.99},
    {nome:'Impressora', qtde: 0, preco: 649.50},
    {nome:'Caderno', qtde: 4, preco: 27.10},
    {nome:'Lapis', qtde: 3, preco: 5.82},
    {nome:'Tesoura', qtde: 1, preco: 19.20},
]

// const getName = n => n.nome;
// const name = carrinho.map(getName)
// const getTotal = product => product.qtde * product.preco
// const total = carrinho.map(getTotal);
// console.log(total)

Array.prototype.meuMap = function(fn) {
    const mapped = []
    for(let i=0; i< this.length; i++){
        const result = fn(this[i], i, this)  

        mapped.push(`${result}`)
    }
    return mapped
}

const getName = n => n.nome;
const name = carrinho.meuMap(getName)
const getTotal = product => product.qtde * product.preco
const total = carrinho.meuMap(getTotal);
console.log(total)