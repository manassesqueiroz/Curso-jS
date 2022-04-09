
var n =document.getElementById('txtn')
var quadro =document.getElementById('quadro')
var res  = document.getElementById('res')
var valores = []
function rnumeros(n){
if(Number(n) >=1  && Number(n) <=100){
    return true
}else{
    return false
}
}
function inlista(n, l){
 if (l.indexOf(Number(n)) !=-1){
     return true
 }else{
     return false
 }


}
function adicionar() {
    if (rnumeros(n1.value) && !inlista(n1.value, valores)){
valores.push(Number(n1.value))
let item =document.createElement('option')
item.text=`Valor ${n1.value} adicionado.`
quadro.appendChild(item)
res.innerHTML=''
}else{
       window.alert('Valor invalido ou já encontrado na lista')
}
n1.value =''
n1.focus()

}

function finalizar(){
    if (valores == 0){
        window.alert('Adicione valores acima antes de Finalizar.')
    }else{
        let tot = valores.length
        let maior= valores[0]
        let menor= valores[0]
        let soma= 0
        let media =0
        for(let pos in valores){
            soma+= valores[pos]
            media =soma/tot
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        
        } 
      
        res.innerHTML = ''
        res.innerHTML+=`<p>Ao todo, temos ${tot} numeros cadatrados .</p>`
        res.innerHTML+=`<p>O maior valor é ${maior}.  </p>`
        res.innerHTML+= `<p>O menor valor é ${menor}.  </p>`
        res.innerHTML+= `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML+= `<p>A media desses valores é ${media}.</p>`
    }



}