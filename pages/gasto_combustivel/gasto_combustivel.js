function combustivelGasto(tempoViagem, velocidadeMedia){
    let distancia = tempoViagem * velocidadeMedia
    let litros = distancia / 12
    return litros
}

let resultado1 = combustivelGasto(10, 85)
let resultado2 = combustivelGasto(2, 92)
let resultado3 = combustivelGasto(22, 67)

console.log(`${resultado1.toFixed(3)}`)
console.log(`${resultado2.toFixed(3)}`)
console.log(`${resultado3.toFixed(3)}`)