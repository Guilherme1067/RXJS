
function ordenar(array){
    return [...array].sort((a,b) => a-b) 
}

const nums = [3, 1 ,7 ,9,4,6]
// Object.freeze(nums)
const numsOrdenados = ordenar(nums)
console.log(nums, numsOrdenados)