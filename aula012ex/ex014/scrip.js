function carregar (){
var msg = document.getElementById('msg')
var img =document.getElementById('imagem')
var data =new Date 
var hora =data.getHours()
msg.innerHTML=`Agora são ${hora} horas. `
if (hora >=0 && hora <=5) {
    img.src='madrugada.png'
    document.body.style.background=`#000000`
}
else if(hora >5 && hora <12){
    img.src = 'manha.png'//manhã
    document.body.style.background = `#708090`
}
else if (hora >=12 && hora <18 ) {
    img.src='tarde1.png'//tarde
    document.body.style.background=`#DEB887`
}
else {
    img.src = 'noite1.png' //noite
    document.body.style.background = `#363636`
}


}


