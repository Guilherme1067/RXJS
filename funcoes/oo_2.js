class Produto {
    constructor(nome,preco,desc = 0.5){
        this.nome = nome;
        this.preco = preco;
        this.desc = desc;
    }

    get nome(){
        return `Produto: ${this._nome}`
    }

    set nome(novoNome){
        return this._nome = novoNome.toUpperCase();
    }

    get preco() {
        return this._preco
    }

    set preco(novoPreco){
        if(novoPreco >= 0){
            this._preco = novoPreco
        }
    }

   get precoFinal() {
        return this.preco * ( 1 - this.desc)
    }
}

const p1 = new Produto('Tv', 10)
p1.preco = 30
console.log(p1.nome)
console.log(p1.preco)
console.log(p1.precoFinal)