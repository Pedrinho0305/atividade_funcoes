function volumeEsfera (raio){
    let pi = 3.14159
    let volume = pi * (4/3.0) * (raio * raio * raio)
    let volumeTotal = volume
    return volumeTotal
}

let esfera1 = volumeEsfera(3)
let esfera2 = volumeEsfera(15)
let esfera3 = volumeEsfera(1523)

console.log(`VOLUME 1 = ${esfera1.toFixed(3)}`)
console.log(`VOLUME 2 = ${esfera2.toFixed(3)}`)
console.log(`VOLUME 3 = ${esfera3.toFixed(3)}`)