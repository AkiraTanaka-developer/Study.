const escola = "Cod3r"

console.log(escola.charAt(4)) //Imprimi o caractere da String na ordem 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Imprimi o caractere com o UNICODE HTML.
console.log(escola.indexOf('3'))
console.log(escola.substring(1)) // Imprimi a partir da indice um de "cod3r"
console.log(escola.substring(0, 3)) //Imprimi os indices de 0 a 2.
console.log('Escola '.concat(escola).concat("!")) // Concatenar Sting com variável.
    // ou outra forma de concatenar 
console.log('Escola ' + escola + "!")

console.log(escola, replace(3, "e")) // Substituir o 3 por e.active
console.log('Ana,Maria,Pedro'.split(',')) //função de gerar array