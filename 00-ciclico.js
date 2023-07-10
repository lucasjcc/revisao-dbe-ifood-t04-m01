// // 1) Fale se um número qualquer é par
// const num1 = 3456429890
// const restoDaDivisao = num1 % 2
// if (restoDaDivisao === 0) {
//     console.log("Par")
// } else {
//     console.log("Ímpar")
// }


// 2) Saber se um ano teve Copa 
// const anoDeCopa = 2002
// const periodoDeCopa = 4
// const anoQueQueroSaber = 4582

// const diferenca = anoQueQueroSaber - anoDeCopa

// if (diferenca % periodoDeCopa === 0) {
//     console.log("Ano de Copa")
// } else {
//     console.log("Não é ano de Copa")
// }


// 3) Em qual aluno vai parar
const filaAlunos = ["Lucas", "Rute", "Guido"]
const periodoRepeticao = filaAlunos.length
const numeroSorteado = 42

const restoDivisao = numeroSorteado % periodoRepeticao

if (restoDivisao === 0) {
    console.log(filaAlunos[filaAlunos.length - 1])
} else {
    console.log(filaAlunos[restoDivisao - 1])
}

