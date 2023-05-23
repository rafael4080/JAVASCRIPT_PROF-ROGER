const postTitle = 'É bolacha ou biscoito ?'
const postAuthor = 'Mathes Saad'
const postComent = 15

//Usando concatenação
/*const postMessage = "O post " + postTitle + " autor " +  postAuthor + postComent
console.log(postMessage)
console.log("Voce manja do filme 'as branquelas' ? ")*/

//Resolver conflito entre aspas e uma string,ou você inclui uma aspas simples que tem abertura
//e fechamento com aspas duplas ou inclui aspas duplas  que tem abertura e fechamento com aspas simples
//ou utiliza a barra invertida    console.log("Voce manja do filme \'as branquelas\' ? ")


//usando template string
/*const postMessage =`O post ${postTitle} do ${postTitle} ,tem ${postComent} comentarios`
console.log(postMessage)*/



//criando templates em HTML
const html = `
<h2>${postTitle}</h2>
<p>Autor:${ postAuthor}</p>
<span>Este post tem ${postComent} comentarios</span>
`
console.log(html)

