function pular() {

 var res=document.getElementById('res')  
var inicio =document.getElementById('inicio')
var fim =document.getElementById('fim')
var pulo =document.getElementById('pulo')
var n1=Number(inicio.value)
var f1=Number(fim.value)
var p1=Number(pulo.value)
res.innerHTML= ''
if( p1 == 0 ){
    window.alert('adotamos Pular = 1')
    p1 = 1
}
if(n1 <=f1){
for(c1 = n1;c1 <=f1;c1+=p1){
res.innerText+= `${c1}º  \u{1F449}. `}

}
if(n1 >=f1 ){
    for(c1 = n1;c1 >=f1;c1-=p1){
        res.innerText+= `${c1}º \u{1F449} `}
}//else  { for (c1 = n1 ; c1 >=f1;c1-=p1)
    //res.innerText+= `${c1}º passo.`




//res.innerHTML= `${}`

    

}
