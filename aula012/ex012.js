var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas `)
if (hora <6){
    console.log('que que vc ta aprontando de madrugas meu amor')
}
else if (hora <12 ){ 
console.log('Bom dia meu amor')
}else if (hora <18){
    console.log('Boua tarde meu amor')
}else if(hora <24){
    console.log('vomos bricar hoje a noite meu bem.')
}