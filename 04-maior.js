// 1) Encontre o mais velho
const idades = [2, 3, 13, 12, 14, 45, 17, 9, 10, 11, 22, 23]

let maisVelho = idades[0]
for (let idade of idades) {
    if (idade > maisVelho) {
        maisVelho = idade
    }
}

console.log(maisVelho)
