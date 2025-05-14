function salario (salarioFixo, totalVendas){
    let porcentagem = 0.15
    let bonus = totalVendas * porcentagem
    let salarioTotal = salarioFixo + bonus
    return salarioTotal
}

let funcionario1 = salario(500, 1230.3)
let funcionario2 = salario(700, 0)
let funcionario3 = salario(1700, 1230.5)

console.log(`TOTAL 1 = R$ ${funcionario1.toFixed(2)}`)
console.log(`TOTAL 2 = R$ ${funcionario2.toFixed(2)}`)
console.log(`TOTAL 3 = R$ ${funcionario3.toFixed(2)}`)