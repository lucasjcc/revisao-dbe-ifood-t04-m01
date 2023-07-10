// // 1) Saber se existe alguém maior de idade
// const idades = [2, 3, 13, 12, 14, 17, 9, 10, 11]

// let tem = false
// for (let idade of idades) {
//     if (idade >= 18) {
//         tem = true
//         break
//     }
// }

// !tem ? console.log("Não tem maior de idade") : console.log("Tem maior de idade")

// 2) Criar uma lista dos maiores
const listaMaiores = []
for (let idade of idades) {
    if (idade >= 18) {
        listaMaiores.push(idade)
    }
}

console.log(listaMaiores)
