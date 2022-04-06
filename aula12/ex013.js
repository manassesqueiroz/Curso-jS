var dat = new Date
var dia = dat.getDay()
/*
0=domingo
1=segunda
2=terça
3=quarta
4=quinta
5=sexta
6=sabado
*/
switch(dia){
case 0:
    console.log('DOMINGO, hoje e seu dia de aproveitar...')
     break
case 1:
    console.log('SEGUNDA, hoje tu tem que estudar, pra ser alquem na vida..')
     break
case 2:
    console.log ('TERÇA, bora estudar quem ganha dinheiro dormindo é puta...') 
     break
case 3:
    console.log('QUARTA, estudar vagabundo tu não naceu rico....')
     break
case 4:
    console.log('QUINTA, bora la que depois nos vomos se recompensados....')
     break
case 5:
    console.log('SEXTA, perde e pros fracos, por isso ainda numca perdemos a virgindade-_-')
     break
case 6:console.log('SABADO, bora la da uma estudada pra que amanhã vai ser um pouco intediante......^__^')
     default:
         console.log('ERRO nem dia invalido...')
    break
}