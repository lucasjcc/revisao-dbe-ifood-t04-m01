// 1) Contar quantas pessoas são maiores de idade
const idades = [2, 3, 13, 12, 14, 17, 9, 10, 11, 22, 23]

let contador = 0
for (let idade of idades) {
    if (idade >= 18) {
        contador += 1
    }
}

console.log(contador)
