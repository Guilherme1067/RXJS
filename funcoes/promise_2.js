function executarTempo(time = 2000){
    return new Promise(function (resolve){
        setTimeout(function (){

            console.log("teste")
            resolve()
        },time)
    })
}

executarTempo(5000).then(executarTempo()).then(executarTempo)