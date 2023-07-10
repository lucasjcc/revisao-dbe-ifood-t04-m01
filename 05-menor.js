// 1) Encontre o mais novo da lista
const idades = [2, 3, 13, 12, 14, 45, 17, 9, 1, 10, 11, 22, 23]

let maisNovo = idades[0]
for (let idade of idades) {
    if (idade < maisNovo) {
        maisNovo = idade
    }
}
console.log(maisNovo)

