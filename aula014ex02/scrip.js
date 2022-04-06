function multiplicar(){
var n =document.getElementById('txtn')
var t =document.getElementById('res')
var n1 =Number(n.value)
t.innerHTML= ''
if(n1 == 0 ){
    window.alert('por favor digite um numero')
}
else{
    for(c =1 ;c <=10;c++){
    let item = document.createElement('option')
    item.text =` ${n1}x${c} = ${n1*c}`
    t.appendChild(item)
    }
}

}