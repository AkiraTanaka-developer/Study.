const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90   
}

'{"nome": "Camisa Polo", "preco": 79.90}' // estrutura de json - textual, utilizado para troca de dados entre sistemas. 

console.log (prod2)