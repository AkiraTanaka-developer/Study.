const valores = [7.7, 8.9, 6.3, 9.2]
console.log (valores[0], valores[3])
console.log (valores[4])

valores [4] = 10
console.log(valores)
console.log(valores.length) // quantidades de elementos na array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())// imprimir somente o último elemento da array
delete valores[0] // deletar um elemento de uma array
console.log(valores)
console.log (typeof valores)
