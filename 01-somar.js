// 1) Calcule a média das idades
const idades = [18, 18, 13, 12, 14, 9, 10, 11]

let soma = 0
for (let idade of idades) {
    // soma = soma + idade
    soma += idade
}

const media = soma / idades.length

console.log(media)

// 2) Multiplicar os elementos
// let multiplicacao = 1
// for (let idade of idades) {
//     multiplicacao *= idade
// }

const alunos = [
    {
        nome: "Lucas",
        notas: [1,2,3,4]
    },
    {     
        nome: "Camila",
        notas: [5,6,7,8],
    }
]

const novaListas = []
for (let aluno of alunos) {
    let soma = 0
    for (let nota of aluno.notas) {
        soma += nota
    }
    novaListas.push({
        soma: soma,
        ...aluno
    })
}

console.log(novaListas)
