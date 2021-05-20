const pessoa = {
    nome: "Maria",
    altura: 1.76,
    cidade: 'São Paulo',
    end: { rua: 'Feliz'}
}

// Atribuição por Referência
const outraPessoa = pessoa

// Passagem por Referência
function alteraPessoa(pessoa){
    const novaPessoa = {...pessoa}

    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'

    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)
