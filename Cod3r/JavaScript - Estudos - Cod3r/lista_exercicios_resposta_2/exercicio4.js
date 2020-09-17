function divisao (dividendo, divisor){
    if (divisor == 0 ){
        console.log("Não é possivel o divisor ser 0, tente um número maior que zero")
    } else { 
        resultado = dividendo / divisor 
        console.log(resultado)
        resto = dividendo % divisor 
        console.log(resto)
    }
}

divisao (0,1)

// ou 

function divisao1 (dividendo1, divisor1 ){
    console.log(`O resultado da divisão entre ${dividendo1} e ${divisor1} é: ` + Math.floor(dividendo1 / divisor1));
    console.log(`O resto é ${dividendo1 % divisor1}`)
}

divisao1(100, 3)