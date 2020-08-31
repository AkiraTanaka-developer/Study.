function getInteiroAletatorioEntre (min, max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0 

do {
    opcao = getInteiroAletatorioEntre (-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while (opcao != -1)

console.log('Atá a próxima')