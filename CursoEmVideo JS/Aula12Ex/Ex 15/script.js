function verificar (){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro} Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'boy.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','young-man.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','man.png')
            }else {
                //idoso
                img.setAttribute('src','old-man.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','girl.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','young-woman.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','woman.png')
            }else {
                img.setAttribute('src','old-woman.png')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)


    }
}