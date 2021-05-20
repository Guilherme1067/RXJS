function gerarNum(min,max){
    if(min > max) [min,max] = [max,min]

    return new Promise(resolve => {
        const fator = max - min +1;
        const aleatorio = parseInt(Math.random() * fator ) + min
        resolve (aleatorio);

    })
}

gerarNum(1,8).then(num => num * 10).then(numX10 => `O número gerado foi ${numX10}`).then(console.log)