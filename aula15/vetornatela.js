var num =[5,7,9,2,1,]
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçães.`)
console.log(`o primeiro valor do vetor é ${num[0]}  `)
let pos = num.indexOf(8)
if(pos == -1){
    console.log('Seu valor não foi encontrado.')
}else {
    console.log(`seu valor esta na podição. ${pos}`)
}