function verificar(){ 
var data=new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if(fano.value.length == 0 || Number(fano.value) >ano){
    window.alert('verifique os dados e tente novamente!!')
}else{ 
var fsex =document.getElementsByName('radsex')
var idade =ano - Number(fano.value)
var genero = ''
var img =document.createElement('img')
img.setAttribute('id', 'foto')
if(fsex [0].checked){
    genero = 'Homem'
    if(idade>=0 && idade <3){
     //bebe
     img.setAttribute('src' ,'bebeh.png' )}
    else if(idade >=3 && idade <10){
        img.setAttribute('src','criança3.png')
    }
     //criança
     else if(idade >=10 && idade <17){
         img.setAttribute('src', 'adolecente16.png')
     }
     //adolecente
     else if(idade >=17 && idade <35){
         img.setAttribute('src','jovem25.png')
     }
     //jovem
     else if(idade >=35 && idade <60){
         img.setAttribute('src','senhor.png')
     }
     //senhor
     else if(idade >=60){
         img.setAttribute('src', 'idoso.png')
     }
     //idaso
}else if(fsex[1].checked){
    genero = 'Mulher'
    if(idade>=0 && idade <3){
        img.setAttribute('src','bebem.png')
    }
     //bebe

    else if(idade >=3 && idade <10){
        img.setAttribute( 'src', 'criança3m.png')}
     //criança
     else if(idade >=10 && idade <17){
         img.setAttribute('src','adolecente16m.png')
     }
     //adolecente
     else if(idade >=17 && idade <35){
         img.setAttribute('src','jovem25m.png')}
     //jovem
     else if(idade >=35 && idade <60){
         img.setAttribute('src','senhora.png')}
     //senhor
     else if(idade >=60){
         img.setAttribute('src','idosa.png')}
    }
     //idaso

res.style.textAlign= 'center'
res.innerHTML = ` Detectamos ${genero} com ${idade} anos .`
res.appendChild(img)
}
}
