function funcionaOuNao(valor, chanceErro){
    return new Promise((resolve,reject) =>{
        try{
            conol.log('teste')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }
    })
}

funcionaOuNao('testando...', 0.5 )
.then(v => console.log(`Valor: ${v}`))
.then(
    v => consol.log(v),
    err => console.log(`Erro Esp.: ${err}`)
)
.catch(err => console.log(`Erro: ${err}`))
 .then(() => console.log("fim"))