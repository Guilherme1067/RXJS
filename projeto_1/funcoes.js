const fs = require('fs')
const path = require('path')

let filtrarExtensão = (padrao) =>  (array) => array.filter(el => el.endsWith(padrao))

function lerDiretorio(caminho){
    return new Promise((resolve,reject) => {
        try{

            let arquivos =  fs.readdirSync(caminho)
            arquivos =  arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        }catch(e){
            reject(e)
        }
    })
}

const lerArquivo = caminho => {
    return new Promise((resolve,reject) => {
        try{
            const arquivo = fs.readFileSync(caminho, {encoding: 'utf-8' })
            resolve(arquivo)
        }catch(e){
            reject(e)
        }
    })
}

const lerArquivos = caminhos => Promise.all(caminhos.map(caminho => lerArquivo(caminho)))

const removerSeVazio = array => array.filter(el => el.trim())

const removerSeIncluirTexto = (padraoTextual) =>{
    return array => {
        return array.filter(el => !el.includes(padraoTextual))
    }
} 

const removerSeApenasNumero = array => {
 return array.filter(el => {
        const num = parseInt(el.trim())
        // Um NAN nunca é === um NAN isso que faz a logíca abaixo funcionar
        return num !== num
    })
}


const removerSimbolos = simbolos => {
    return array => {
       return array.map(el => {
           return simbolos.reduce((acc,simbolo) => {
            return acc.split(simbolo).join('')
           }, el)
        })
    }
}

const mesclarConteudos = conteudos => conteudos.join(' ')

const separarTextoPor= simbolo =>{
    return texto => {
       return texto.split(simbolo)
    }
}

const ordernarPorAtribNumerico = (attr, ordem='asc') => {
    return (array) => {
      const asc = (o1,o2) => o1[attr] - o2[attr]
      const desc = (o1,o2) => o2[attr] - o1[attr]
      return array.sort(ordem === 'asc' ? asc : desc)
    }
}

function composicao(...fns){
    return function(valor){
        return fns.reduce( async (acc,fn) => {
            if(Promise.resolve(acc) === acc){
                return fn(await acc)
            }else{
                return fn(acc)
            }
        },valor) 
    }
}

module.exports = {
    composicao,
    lerDiretorio,
    filtrarExtensão,
    lerArquivos,
    removerSeVazio,
    removerSeIncluirTexto,
    removerSeApenasNumero,
    removerSimbolos,
    mesclarConteudos,
    separarTextoPor,
    ordernarPorAtribNumerico
}