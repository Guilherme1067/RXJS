// Diz-se qua uma linguagem de programação possui
// funções de primeira classe quando funções nessa
// linguagem são tratas como qualquer outra variável

const x = 3;

const y = function(txt){
    console.log(`Esse é o texto: ${txt}`)
}

console.log(x)
y('Hello world')