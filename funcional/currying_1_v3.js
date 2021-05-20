function textoComTamanhoEntre(min){
    return function (max){
        return function (erro){
            return function(texto){
                // Laze Evaluation
                const tamanho = (texto || '').trim().length
                if(tamanho < min || tamanho > max){
                    throw erro
                  }
                }
            }
        }
    }

    const aplicarValidacao = fn =>{
        return valor => {
            try{
                fn(valor)
            }catch(e){
                return {error : e}
            }
        }
    }

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome Produto inválido')
const validarFuncao = aplicarValidacao(forcarNomeProdutoValido)
const p1 = { nome: 'a', preco: 14.99, desc: 0.25}
console.log(validarFuncao(p1.nome))

