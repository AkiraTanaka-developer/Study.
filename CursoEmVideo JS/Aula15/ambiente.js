let num = [5, 8, 2, 9, 3]

num.push(1) // adiciona o elemento 1 ao vetor na última posição.
num.sort() // ordena os elementos do vetor em número crescente. 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(6)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
}else {
    console.log(`O valor está na posição ${pos}`)
}


/*
let valores = [8,1,7,4,2,9]

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(let pos in valores){ 
    valores.sort()
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
