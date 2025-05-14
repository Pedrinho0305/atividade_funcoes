let consumoMedioAutomovel = (distanciaTotalKm, totalCombustivelGasto) => (distanciaTotalKm + totalCombustivelGasto)/2

let media1 = consumoMedioAutomovel(500, 35.0)
let media2 = consumoMedioAutomovel(2254, 124.4)
let media3 = consumoMedioAutomovel(4554, 464.6)

console.log(`${media1.toFixed(3)} km/l`)
console.log(`${media2.toFixed(3)} km/l`)
console.log(`${media3.toFixed(3)} km/l`)