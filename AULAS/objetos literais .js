//Objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome e um valor.
//um valor de propriedade pode ser uma função,que então é considerada um metodo do objeto

// Objetos literais
/*let user={
   name:'João',
   age:42,
   email:'rafael-4b@hotmail.com',
   city:'São Paulo',
   postBlog:['Paste','suco de laranga']
}
console.log(user)
console.log(user['name'])
user.age =18
console.log(user)*/

//Adicionando metodos
/*let user={
  name:'João',
  age:42,
  email:'rafael-4b@hotmail.com',
  city:'São Paulo',
  postBlog:['Paste','suco de laranga'],
  login:function(){
    console.log('Usuário logado')
  },
  logout:function(){
    console.log('Usuário deslogado')
  }
}
user.login()
console.log(user['name'])
user.logout()*/


//Treinando
/*let coresSemaforo ={
    primeiraCor:'verde',
    segundaCor:'amarelo',
    terceiraCor:'vermelho',
}
console.log(coresSemaforo)
console.log(coresSemaforo['terceiraCor'])//Maneira de acessar um item
coresSemaforo.primeiraCor= 'quebrado'//Alterando um valor
console.log(coresSemaforo)
const listNames = {
  aluno1 :"João",
  aluno2 : "Maria",
  aluno3 : "Carla",
  aluno4 : "josé"
}

console.log(listNames.aluno1)
console.log(listNames["aluno4"])

listNames.aluno2 ="Francisco"
console.log(listNames)*/

/*const pessoa ={
   nome:"Carla",
   idade:35,
   peso:65,
   altura:175,
   email:"carlagtz@gamail.com",
   telefone:11988380301,
   profissão:function(){
     console.log("cabelereira")
   },
   endereco:function(){
     console.log("Avenida das Nações unidas")
   }
}
console.log(pessoa)
console.log(pessoa["peso"])

pessoa.peso = 62
console.log(pessoa)

pessoa.profissão()
pessoa.endereco()

const objetoLiteral = {
    cidade:"São Paulo",
    nome:"Rafael Almeida",
    dataNascimento:1980,
    esposa:"Deilza"
}
console.log(objetoLiteral)
console.log(objetoLiteral.cidade)

objetoLiteral.dataNascimento = 1981
console.log(objetoLiteral)
console.log(objetoLiteral["nome"])
objetoLiteral["nome"] = "Jose"
console.log(objetoLiteral)*/


/*const listMercado = {
   arroz:'Camil',
   feijao:'Pantera',
   marcarrao:'Seara'
}
console.log(listMercado)
listMercado.arroz = 'Zero Grau',
console.log(listMercado)

console.log(listMercado.arroz) // Acessando um item

listMercado["marcarrao"] = "blá blá"  // Alterando o valor
console.log(listMercado)*/

const itens = {
   item01:"caneta",
   item02:"luminária",
   item03:"vaso"
}
console.log(itens)
console.log(itens.item01)

itens["item01"] ="lapis"
console.log(itens)

console.log(itens.item02)

console.log(typeof itens)


