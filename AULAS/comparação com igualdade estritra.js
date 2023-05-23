const age = 31

// 'igual a'  e 'diferente de '

//console.log(age == 31)     //true
//console.log(age =='31')   //true

//Observação javascript por debaixo dos panos converte a string em number.

//console.log(age !=31) // false
//console.log(age != '31') // false   tem um valor number por tanto não é diferente.


// 'igual a ' e  do mesmo tipo ''

console.log(age === 31)
console.log(age === '31') // não tem conversão ocorrendo por debaixo dos panos

console.log(age !== 31)
console.log(age !== '31')  // a string é diferente do número 31 por tanto é uma condição verdadeira.

