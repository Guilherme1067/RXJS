function gerarNum(min,max,numerosProibidos){
    if(min > max) [min,max] = [max,min]
    return new Promise((resolve,reject)=> {
        const fator = max - min +1;
        const aleatorio = parseInt(Math.random() * fator ) + min
        if(numerosProibidos.includes(aleatorio)){
            reject("Número repetido")
        }else {
            resolve (aleatorio);
        }
    })
}

async function gerarMegaSena(qtdeNumeros,tentativas = 1){
    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
            numeros.push(await gerarNum(1,5,numeros))
        }   
        return numeros
    }catch(e){
        if(tentativas > 10){
            throw "Não foi dessa Vez"
        }else {

            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15).then(console.log).catch(console.log)