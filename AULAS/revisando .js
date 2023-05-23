//Variáveis........... uma variavél armazena um valor que pode ser um número um e-mail uma string....
/*let age = 31
let currentYear = 1980
console.log(age,currentYear)
age = 32
console.log(age)


const year = 2022
year = 2
console.log(year)*/

//Teória MDN Variáveis /
/*const button = document.querySelector("button")

button.onclick= function(){
  const nome = prompt("Digite seu nome:")
   alert(nome + ",seja bem vindo!")
}*/

/*const nomeSobreNome = "Rafael Almeida";
const idade = 42;
document.write(nomeSobreNome +  " " + idade + " anos");
let scobydoo;
console.log(scobydoo)
meuNome = "Cris";
minhaIdade = 37;
console.log(meuNome);
console.log(minhaIdade)*/


var mName = "Stela"

 function logNome(){
   //console.log("Prazer" + " " +  mName + ".") 
 }
 logNome()

 //Tipos de dadps de uma varáivel

 //Number  /Strings / booleans/ udenfenid/null/object/bigint/symbol
let estouOuvindo = true
//console.log(estouOuvindo)

 let numeros = 6 < 3
 if( 6 < 2){
    //console.log("true")
 }else{
  //console.log("false")
 }

//console.log(numeros)
 //console.log(typeof numeros)




 //STRINGS 
 //Strings
  //console.log("Hellow,word!")  //Aspas simples 
 //const email = 'rafael-4b@hotmail.com' //Aspas duplas
 //console.log(email)

 //Concatenação de strings
    const fastName = "Rafael"
    const lastName = 'Almeida'
    //console.log(fastName + " " + lastName)

 //Acessando caracteres
  //console.log(fastName[0])
  //console.log(lastName[0])


 //Comprimento de uma string
 //console.log(fastName.length)
 //console.log(lastName.length)


 //Métodos de uma string
 //console.log(fastName.toUpperCase())  

 const result = fastName.toLowerCase() //Armazenada na result
 //console.log(result)

// console.log(typeof fastName)
 //console.log(typeof lastName)

 //Diferença tecnica
 //Função ->  É um pedaço de código que executa alguma ação em específico.

 //Metodo é uma função que esta associada a um objeto ou tipo de dado em particular

const index = fastName.indexOf("R")  //Dentro esta um argumento se alguem chamar de parametro ta ERRADO.
//console.log(index)
const indexposi = 'deilza'
//console.log(indexposi.indexOf('a'))  // Informa  a posição do caractere


//Metosdos comuns de strings   Aula 02/03
 const emails = "rafael-4b@hotmail.com"
 //console.log(emails.lastIndexOf("a"))   // Informa a posição da  ultima ocorrência do caractere  


/*const sliceArm = emails.slice(0,10)   //Irei utilizar o slice quando eu quero obter uma parte de uma string
console.log(sliceArm)*/

//const objetoReplace = objetosEscr.replace('can','Xer')  //Alterar uma string por outra
//console.log(objetoReplace)

/*const nameDev = "Rafael"
console.log(nameDev)
console.log(nameDev.length)
console.log(nameDev.toUpperCase())
console.log(nameDev.toLowerCase())
console.log(nameDev.indexOf("a"))
console.log(nameDev.lastIndexOf('a'))

const nameSlice = nameDev.slice(0,3)
console.log(nameSlice)

const nameReplace = nameDev.replace('R','X')
console.log(nameReplace)*/


//Recapitulando aul sobre NUMBERS

//Inteiros
 const radius = 10
 const pi  = 3.14
     //console.log(radius,pi)
//Operadores aritiméticos
  const rimeder = 5 % 2 // Resto da divisão
   // console.log(rimeder)

    const area = pi * radius ** 2


//Ordem de operaçoes
const crazyOpeation = 5 * (3 +14)  - 14
//console.log(crazyOpeation)

//console.log(area)
   // Parenteses
   //Expoentes
   //Multiplicação e divisão
   //Soma e subtração.


//Operadores de incremento e decremento
   let post  = 10
   //post = post + 1
   post++
   post --
   //console.log(post)

//Operadores addittion, subrtraction,multiplication e division
//post += 15
post -= 1
//console.log(post)

//NaN  //Operação que não faz sentindo  operação que não resulta em um número
//console.log(7/'oi')

//concatenação de strings com números
const postResult = 'O post tem ' +  post + " Liks e " + crazyOpeation + " seguidores. "
//console.log(postResult)

//Observação quando é convertido string com número o javascript converte automaticamente um número em uma string.


const postTitle = 'È  bolacha ou biscoite'
const postAutor = 'Matheus saad'
const postComent = 15


//Template string  ${}

 //Usando concatenação

 const postMessage = 'O post " '+ postTitle +  ' " do ' + postAutor + ',tem '+ postComent + ' comentarios.'
 //console.log(postMessage)
 //console.log('Você conhece o filme\'As branquelas\'?')

//Usando template string
const postMessageTremplate = ` O post" ${postTitle} " do ${postAutor},tem ${postComent} comentarios.`
//console.log(postMessageTremplate)

//Criando template html
const html = `
  <h2>${postTitle}</h2>
  <p>Autor:${postAutor}</p>
  <span>Este post tem ${postComent} comentários</span>
`
//console.log(html)

const frase = "Repita"
//alert("Inicializando o for")
for(let i = 0; i < frase.length;i++){

      //alert("Iniciando:" + frase[i])
}
//alert("Parou")


//ARRAYS

const heroes = ['Batman','Catwoman','Iron Man'] //Array de strings
//document.write(heroes[1])
heroes[2] = 'Rafael-Man'   //Alterando um valor no array
//document.write(heroes)

const age = [35,25,45,65,25]  //array de números
//document.write(age[2])


const ramdonArray = ['Park',34,64,'Rafael-ultra-Max']
//document.write(ramdonArray[2])

//METODOS DO ARRAY

const joinHeroes = ramdonArray.join(' - ')  //Apresenta o array em forma de string e também posso informa um separador como argumento
const indexOfArray = age.indexOf(25)  // obtem a primeira ocorrência
const moreHeroes = heroes.concat(['Helo-corujita','He-Man']) //Concatena um array ao outro
const pushHeroes = heroes.push('Empurradex','VendimiX')  //Empurra um item para o fim do array
const popHeroes = heroes.pop()  //Remove o ultimo item do array

//document.write(joinHeroes)
//document.write(indexOfArray)
//document.write(moreHeroes)
//document.write(heroes)
//document.write(popHeroes)
//document.write(heroes)


const heroesCop = ['Homem borracha','Mulher invencivel','Homem invisível']
//document.write(heroesCop[0])
heroesCop[2] = 'Homem Formiga'
//document.write(heroesCop)

const joinHeroesCop = heroesCop.join(' *** ')
//document.write(joinHeroesCop)

const indexOfHeroes = heroesCop.indexOf('Homen borracha')
//document.write(indexOfHeroes)

const indexConcatHeroes = heroesCop.concat(['X- Max'])
//document.write(indexConcatHeroes)

const indexPushX = heroesCop.push('Teste')
 // document.write(indexPushX)
//document.write(heroesCop)

const heroesPop = heroesCop.pop()
//document.write(heroesCop)

const list = ['Item01','Item02','Item03']
    //document.write(list)
list[0] = 'Item00'
   //document.write(list)
const listJoin = list.join( ' *  ' )
  //document.write(list)
  //document.write(listJoin)
 const listIndexOf = list.indexOf('Item01')
   //document.write(listIndexOf)
const listConcat = list.concat(['Item04','Item05'])
    //document.write(listConcat)
const listPush = list.push('Item04')
   //document.write(listPush)
   //document.write(list)
const listPop = list.pop()
  //document.write(list)
  //document.write(list)

  //NULL E UNDEFINED
  let emptiness  = null
   //console.log(emptiness,emptiness + 3, `O valor é ${emptiness}`  )


   //Valores booleanos e comparaçoes.
    //console.log(true,false,'true','false')

   //Metodos que podem retorna booleas
     const email = "rafael-4b@hotmail.com"    
     const includes = emails.includes("@")// Metodo includes verificar se uma string existe dentro de outra string
      
      const names = ['Dio','Roger','Maicon']
         const arraIncludes = names.includes('Roger')
          //console.log(arraIncludes)
  
   //Operadores de compração
   const ages = 31
   //console.log(ages == 31)
   //console.log(ages == 35)
   //console.log(ages !=35)  // A forma correta é ler age não é igual a 
  // console.log(ages > 30)
  // console.log(ages >= 30)
  //console.log(ages < 31)
 // console.log(ages <= 31)  //Não é menor é igual
  const namesCom = 'roger'
 // console.log(namesCom == 'roger')
  //console.log(namesCom == 'Roger')
  //console.log(namesCom > 'belinha') //r é depois do b
 // console.log(namesCom > 'Roger')  // Uma letra minuscula é maior que uma letra maiscula
 // console.log(namesCom > 'Belinha')

  //Conversão de tipos
let score = '100'
 //score = Number(score)
//console.log(score + 1)
//console.log(typeof score)

const crazyConvertion = Number('maça')
    //console.log(crazyConvertion)
const convertString = String(97)

   //console.log(convertString)
  //console.log(typeof convertString)

  const booleanConvertion = Boolean(0)
     //console.log(booleanConvertion)

  //Valores false:
  //false ,0,' ', " "
  //null
  //undefined
  //NaN

  //Valores truthy
  //Qualquer valor que não é falsy


  //Comparação com igualdade estrita

  const num = 32
     //console.log(num == 32)
     //console.log(num == '32')

    // Igual a , e do mesmo tipo e  diferente de e do mesmo tipo


   //console.log(num != 32)
   //console.log(num  != '32')

 //console.log( num === 32)
 //console.log(num === '32')

  //console.log( num !== 32)
 //console.log(num !== '32')



 //Conversão de tipos

let scores = '100'
 scores = Number(scores)
   //console.log(scores + 1)
   //console.log(typeof scores)

   const crazyConvertions = Number( 'maça')
        //console.log(crazyConvertions)  //NaN é exibido

   const convertNumber = Number(97) 
       //console.log(convertNumber, typeof convertNumber)

   const booleanConvertions = Boolean(10)
     //console.log(booleanConvertions
      
      // Quando qualquer um desses valors é convertido para boolear é convertido em falso)
      //valores falsy
      //false
      //0
      // ' ' , " " ``
      //null
      //undefined 
      //NaN

      //Valores truthy
      // Qualquer valor que não é falso

      //conversões explicitadas 
      //conversões implicitadas é o que o javascript faz por baixo dos panos
 

//Controle de fluxo
/*for(let i = 0;i < 13;i++){
  // console.log(`Dentro do loop:${i}`)
}
console.log('Fim do loop')*/

/*const namesPers = ['Linus','Ada','Bill']
  for(let i = 0;i < namesPers.length;i ++){
      // console.log(namesPers[i])
  }*/

  /*const namesPers = ['Linus','Ada','Bill']
  for(let i = 0;i < namesPers.length;i ++){
      const htmlTemplantes = `<p>${namesPers[i]}</p>`
      //console.log(htmlTemplantes)
  }*/

  /*while loopp
  let i = 0
  while(i < 6){
    console.log(`Dentro do loop:${i}`)
     i++
}
console.log('Fim do loop')*/

/*const namesListPer = ['Jobs','Hoop','Turing']
let i = 0

while(i < namesListPer.length){
      //console.log(`Dentro do loop:${namesListPer[i]}`)
    i++
   }*/

const cont = 19
if(cont > 18){
 // console.log('Verdadeiro')
}else{
  //console.log('Falso')
}

const simpsons = ['Home','Lisa','Marge','Bart','Rafael']
if(simpsons.length >= 3){
   //console.log(simpsons + " O array tem bastantes personagens.")
}

/*const passwd = '012'
if(passwd.length >= 12){
  //console.log('Esta senha é muito forte')
}else if(passwd.length >= 8){
   // console.log('Esta senha tem oito ou mais caracteres')
}else{
 //console.log('A senha deve conter oito ou  mais caracteres')

}*/

//OPERADORES LÓGICOS e ou Ou

//OBSERVAÇÃO NUNCA COLOCAR UM CÓDIGO DESTE EM PRODUÇÃO
/*const passwd = '19875'
const result1 = passwd.length >= 12 && passwd.includes('1')
const result2 =passwd.length >= 8 || passwd.includes('1') && passwd.length >= 5

if(result1){  // As duas condições tem que ser verdadeira operador &&(e)
    console.log('A senha muito forte')
}else if(result2){// Neste caso só uma das condições tem que  resulta eu verdadeiro para ser executado
  console.log('A senha possui oito ou mais caracteres')
}else{
   console.log('A deve ter oito ou mais caracteres.')
}*/

/*const scoress = [50,25,0,30,100,20,10]
for(let i = 0;i < scoress.length;i++){
   if(scoress[i] ===0){
     continue
   }
    console.log(`Sua pontuação foi : ${scoress[i]}`)
    if(scoress[i] === 100){
       console.log("Parabéns você atingiu a pontuação máxima")
       break
    }
}*/

/*const scoress = [50,25,0,30,100,20,10]
for(let i =0;i < scoress.length;i++){
   if(scoress[i] ===0){
      continue
   }
      console.log(scoress[i])
      if(scoress[i] ===100){
         console.log(`Você atingiu a pontuação máxima ${scoress[i]}`)
         break
      }
}*/

//switch statemant
/*const grade = 'B'
switch(grade){
   case 'A':
   console.log('Você tirou nota A')
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


/*const numCase = 4
switch(numCase){
   case 1:
      console.log('É um')
      break
   case 2:
      console.log('É dois ')
      break
   case 3:
      console.log('É três')
      break
   default:
      console.log('Não é nenhum caso')
}
*/
// Function declation
/*function sayhai(){
   //console.log('Hello,word!')
}
sayhai()
sayhai()*/



//function expression

/*const showFood = function(){
  // console.log('pizza')
}
showFood()*/

//Argumentos,parametros e default parametrs
/*const myFunc = function(name,lastName){
   console.log(`Oi,${name} ${lastName}`)
}
myFunc('Rafael', 'Almeida')*/


/*const funcao =function(names,sobren){
   console.log(`Oi ${names},${sobren}`)
}
funcao('Rafael','Almeida')*/


/*const myFunction  =function(names= 'Teles',lastName='Carvalho'){
    console.log(`Meu nome é ${names} ${lastName}`)

}
myFunction('Silveira')*/

//Retornando valores

// arrows function

/*const double = function(number){
    return number + 2
}

//console.log(double(4))*/

/*const doubless = (number )=>{
    return number  * 5
}
const result = doubless(4)
console.log(`Resultado é :${result`)*/

// Funções
const sayHi =() => 'Rafael'
const grat = sayHi()
console.log(grat)

// Metodos

const namess = 'rafael'
const namesUppercase = namess.toUpperCase()
console.log(namesUppercase)

//Foreach e callbacks

const mayFunc= callback =>{
  const value = 77
  callback(value)
}
mayFunc(number =>{
   console.log(number)
})
   
const listNames = ['Rafael','Stefani','Carlos']
listNames.forEach(( listNames,index,array) =>{
    console.log( index,listNames,array)
})
const mFunction = callback=>{
  const value = 77
  callback(value)
}
mFunction(number =>{
   console.log(number)

})
const redesSociais  = ['yuotube',  'stagram','twitter']
    redesSociais.forEach(( redesSocial,index,array)=>{
        console.log(index,redesSocial,array)
    })




















