function retornarValor(){
    return new Promise(function (resolve){

        setTimeout( () => resolve(10),5000 )
    }
    )
}

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
            setTimeout(() =>  resolve())
    },5000)
}

async function executar(){
    let valor = await retornarValor();
    await esperarPor(1500)
    console.log( `o valor é ${valor}`)
    await esperarPor(1500)
    console.log( `o valor é ${valor + 1}`)
    await esperarPor(1500)
    console.log( `o valor é ${valor +2}`)


}

executar();