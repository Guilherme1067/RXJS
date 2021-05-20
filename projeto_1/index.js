const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]


const agruparPalavras = palavras => {
    return Object.values(palavras.reduce((acc,palavra) => {
        const p = palavra.toLowerCase();
        const qtde = acc[p] ? acc[p].qtde + 1 : 1

        acc[p] = {elemento: p, qtde}


        return acc
    }, {}))
}

fn.lerDiretorio(caminho)
.then(fn.filtrarExtensão('.srt'))
.then(fn.lerArquivos)
.then(fn.mesclarConteudos)
.then(fn.separarTextoPor('\n'))
.then(fn.removerSeVazio)
.then(fn.removerSeIncluirTexto('-->'))
.then(fn.removerSeApenasNumero)
.then(fn.removerSimbolos(simbolos))
.then(fn.mesclarConteudos)
.then(fn.separarTextoPor(' '))
.then(fn.removerSeVazio)
.then(fn.removerSeApenasNumero)
.then(agruparPalavras)
.then(fn.ordernarPorAtribNumerico('qtde','desc'))
.then(console.log)