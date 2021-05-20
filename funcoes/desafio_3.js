const fs = require('fs');
const path = require('path')

const lerArquivo = caminho =>{
    return new Promise (resolve => {
        fs.readFile(caminho,(_,conteudo) => {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname,'dados.txt')

lerArquivo(caminho).then(arquivo => console.log(arquivo))