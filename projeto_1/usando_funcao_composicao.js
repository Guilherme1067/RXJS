const { fchmod } = require('fs');
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

const palavrasMaisUsadas = fn.composicao(
fn.lerDiretorio,                          
fn.filtrarExtensão('.srt'),
fn.lerArquivos,
fn.mesclarConteudos,
fn.separarTextoPor('\n'),
fn.removerSeVazio,
fn.removerSeIncluirTexto('-->'),
fn.removerSeApenasNumero,
fn.removerSimbolos(simbolos),
fn.mesclarConteudos,
fn.separarTextoPor(' '),
fn.removerSeVazio,
fn.removerSeApenasNumero,
agruparPalavras,
fn.ordernarPorAtribNumerico('qtde','desc'),
console.log
)

palavrasMaisUsadas(caminho)