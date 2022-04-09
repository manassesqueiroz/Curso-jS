let amigo = {
   nome:`jose`,
    idade:14 ,
    sexo:`M`,
    peso: 67.8 ,
    
    engordar(p=0){
        console.log(`${amigo.nome} estava pesando ${amigo.peso} Kg.`)
        console.log(`ele comeu ${p} Kg no festyfoody. `)
        this.peso += p

    }}
    amigo.engordar(2)
    
console.log(` ${amigo.nome} tem ${amigo.idade} anos, seu sexo é ${
    amigo.sexo}, e agora esta pesando  ${amigo.peso}.`)