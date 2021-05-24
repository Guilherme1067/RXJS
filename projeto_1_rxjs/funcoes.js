const { create } = require('domain')
const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

function elementosTerminadosCom(padraoTextual){
    return createPipeableOperator(subscriber => ({
        next(texto){
            if(texto.endsWith(padraoTextual)){
                subscriber.next(texto)
            }
        }
    }))
}

function lerDiretorio(caminho){
    return new Observable(subscriber => {
        try{

             fs.readdirSync(caminho).forEach(arquivo => {
                 subscriber.next(path.join(caminho, arquivo))
             })
            subscriber.complete()
        }catch(e){
            subscriber.error(e)
        }
    })
}



function lerArquivo(){
    return createPipeableOperator(subscriber => ({
            next(caminho){
            try{
                const conteudo = fs.readFileSync(caminho, {
                    encoding: 'utf-8' 
                })
                subscriber.next(conteudo.toString())
            }catch(e){
                subscriber.error()
            }
            }
        }))
}

function removerSeVazio(){
    return createPipeableOperator(subscriber => ({
        next(texto){
            if(texto.trim()){
                subscriber.next(texto)
            }
        }
    }))
}


function removerSeIncluirTexto(padraoTextual){
    return createPipeableOperator(subscriber => ({
        next(texto){
            if(!texto.includes(padraoTextual)){
                subscriber.next(texto)
            }
        }
    }))
}

function removerSeApenasNumero() {
    return createPipeableOperator(subscriber => ({
        next(texto){
        const text = parseInt(texto.trim())
            if(text !== text){
                subscriber.next(texto)
            }
        }
    }))
}



function removerSimbolos(simbolos){
    return createPipeableOperator(subscriber => ({
        next(texto){
            const textoSemSimbolos = simbolos.reduce((acc,simbolo) =>{
                return acc.split(simbolo).join('')
            },texto)
            subscriber.next(textoSemSimbolos)
        }
    }))
}

function separarTextoPor(simbolos){
    return createPipeableOperator(subscriber => ({
        next(texto){
            texto.split(simbolos).forEach(parte => {
                subscriber.next(parte)
            })
        }
    }))
}



const ordernarPorAtribNumerico = (attr, ordem='asc') => {
    return (array) => {
      const asc = (o1,o2) => o1[attr] - o2[attr]
      const desc = (o1,o2) => o2[attr] - o1[attr]
      return array.sort(ordem === 'asc' ? asc : desc)
    }
}

function createPipeableOperator(operatorFn){
    return function(source){
        return Observable.create( subscriber => {
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (()=> subscriber.complete())
            })
            source.subscribe(operatorFn(subscriber))
        })
    }
}


const agruparPalavras =  () => {
    return createPipeableOperator(subscriber => ({
        next(palavras){
            const agrupado = Object.values(palavras.reduce((acc,palavra) => {
                const p = palavra.toLowerCase();
                const qtde = acc[p] ? acc[p].qtde + 1 : 1
        
                acc[p] = {elemento: p, qtde}
        
        
                return acc
            }, {}))
            subscriber.next(agrupado)
        }
    }))
}

module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivo,
    removerSeVazio,
    removerSeIncluirTexto,
    removerSeApenasNumero,
    removerSimbolos,
    separarTextoPor,
    ordernarPorAtribNumerico,
    agruparPalavras
}