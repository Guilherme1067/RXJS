function somarNoTerminal(fn,a,b) {
    return fn(a,b)
}

function somar (a,b) {
    console.log(a + b)
}
function subtrair(a,b){
    console.log(a-b)
}
somarNoTerminal(somar,2,4)


// arrow function

const somarArrow = (a,b) => console.log(a+b);
const subtrairArrow = (a,b) => console.log(a-b);

const somarNoTerminalArrow =(fn,a,b) => fn(a,b)

const cb = () => console.log("Hello World")

setInterval(cb,1000)
