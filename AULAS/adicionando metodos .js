//Adicionando metodos


/*const listaCacaldos = {
     primeiroCal : "sapato",
     segundoCal:"sandalia",
     terceiroCal:"chinelo",
     quartoCal:"tênis",
     quintoCal:"rasteirinha",
     listEscolher:function(){
       console.log("Irei comprar um item")
     },
     listDevolver:function(){
       console.log("Não irei mais comprar ,depois eu volto")
     }

}
//console.log(listaCacaldos)
console.log(listaCacaldos["quartoCal"])

listaCacaldos.quartoCal = "salto alto"
console.log(listaCacaldos)
listaCacaldos.listEscolher()
listaCacaldos.listDevolver()*/


// Segundo exemplo

/*const flores ={
    especOne : "petunia",
    especiTwo:"margarida",
    especiTree:"copo de leite",
    especiFor:"Gira Sol",
    especFive:"orquidia",
    vaso1:function(){
        console.log("Lindas")
    },
    vaso2:function(){
      console.log("Maravilhosas")
    }

}
console.log(flores)
console.log(flores["especiFor"])

flores.especFive = "Flor do maracuja"
console.log(flores)
flores.vaso1()
flores.vaso2()*/

// funções dentro de objetos são chamados de metodos e fora do objeto são chamados de funções.



const carro = {
    modelo:"bmw",
    cor:"preto",
    bancos:"coro sintetico",
    valor:function(){
      console.log("Parcele o seu carro ")
    },
    sonhe:function(){
      console.log("Realize seu sonho")
    }

}
console.log(carro)
console.log(carro.modelo)

console.log(carro["cor"])
carro.cor = "vemelho"
console.log(carro)
carro.valor()
carro.sonhe()
carro.sonhe()
carro.sonhe()
