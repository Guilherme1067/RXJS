const primeiroElemento = arrayOrString => arrayOrString[0]
const letraMinuscula = string => string.toLowerCase()
new Promise(function (resolve) {
    resolve(['Ana','Bia','Gui','Daniel'])

})   .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
