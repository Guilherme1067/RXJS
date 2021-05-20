function gerarNum(min,max,tempo){
    if(min > max) [min,max] = [max,min]

    return new Promise(resolve => {
        setTimeout(function (){
            const fator = max - min +1;
            const aleatorio = parseInt(Math.random() * fator ) + min
            resolve (aleatorio);

        },tempo)

    })
}

const gerarVariosNum = () => {
    return Promise.all([
        gerarNum(1,8, 1000),
        gerarNum(1,10, 500),
        gerarNum(4,50, 100),
        gerarNum(10,30, 1000),
        gerarNum(55,80, 1000),

    ])
}

console.time('function')
gerarVariosNum().then(console.log).then(() => console.timeEnd('function'))
