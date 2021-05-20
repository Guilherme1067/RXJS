
function calc(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}



function sum(a,b){
    return a+b
}

function multiplicar(a,b){
    return a*b
}
function somar(a){
    return function(b){
        return function (fn){
            return fn(a,b)
        }
    }
}

console.log(somar(1)(2)(sum))

