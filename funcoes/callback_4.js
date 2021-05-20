const carrinho = [
    {nome:'Caneta', qtde: 10, preco: 7.99},
    {nome:'Impressora', qtde: 0, preco: 649.50},
    {nome:'Caderno', qtde: 4, preco: 27.10},
    {nome:'Lapis', qtde: 3, preco: 5.82},
    {nome:'Tesoura', qtde: 1, preco: 19.20},
]

const qntdeMaiorQueZero = item => item.qtde > 0;
const getNome = item => item.nome
// const resultado = carrinho.filter(qntdeMaiorQueZero).map(getNome)
// console.log(resultado)


Array.prototype.meuFilter = function (fn){
    const array = [];
    for(let i=0; i< this.length; i++){
      if(fn(this[i],i, this)){
          array.push(this[i])
      }
    }
    return array;
}

const resultado = carrinho.meuFilter(qntdeMaiorQueZero).map(getNome)

console.log(resultado)