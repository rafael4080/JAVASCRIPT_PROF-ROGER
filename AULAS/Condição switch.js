//switch statement
/*const age = 'C'
switch(age){
   case 'A':
     console.log('Você tirou a nota A')
     break
     case 'B':
      console.log('Você tirou nota B')
      break
       case 'C':
        console.log('Você tirou nota C')
        break
         case 'D':
          console.log('Você tirou nota D')
          break
         case 'E':
          console.log('Você tirou nota E')
          break
          default:
            console.log('Nota inválida')
}*/

//Operador lógico  NOT
const passwd = false
if(!passwd){
    console.log('Você precisa fazer o login para entrar no sistema')
}
console.log(!false)
console.log(!true)

//Break e continue  ,duas palavras chaves relacionadas ao loop

const age = [30,20,15,50,0,40,100,5,2]
for(let i =0;i < age.length;i++){
  if(age[i] ===0){
    continue
  }
    console.log(`Pontuação ${age[i]}`)
    if(age[i] === 100){
      console.log(`PONTUAÇÃO MÁXIMA ${age[6]}`)
      break
    }
}
//switch case

const grade = 'C'
switch(grade){
 case 'A':
   console.log('Você tirou nota A')
   break
   case 'B':
     console.log('O aluno tirou nota B')
     break
     case 'C':
       console.log('O aluno tirou nota C')
       break
       case 'D':
         console.log('O aluno tirou nota D')
         break
         case 'E':
           console.log('O aluno tiou nota E')
           break
           default:
             console.log('Nota invalida')
}

