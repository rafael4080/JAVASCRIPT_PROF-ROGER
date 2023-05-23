const spots = [29,30,40,0,50,200,20,19]
for(let i = 0;i < spots.length;i++){
  if(spots[i]===0){
    
  }
  console.log(`Pontuação ${spots[i]}`)
  if(spots[i]=== 200){
    console.log(`Parabéns a pontuação MÁXIMA atigida foi ${spots[i]}`)
    break
  }
}


/*const spots = [29,30,40,50,0,200,20,19]
for(let i =0;i< spots.length;i++){
  if(spots[i]===0){
    continue
  }
     console.log(`O jodador atingiu a pontuação relacionada ${spots[i]}`)
     if(spots[i]===200){
       console.log(`Parabés essa foi a pontuação Máxima ${spots[5]}`)
         break
     } 
}*/

/*const scores = [50,25,0,30,100,20,10]
for(let i = 0;i < scores.length;i++){
  if(scores[i] === 0){
      continue  // A continue pula uma interação em particular e faz com que o loop sejá sejá executado...

  }
     console.log(`Sua pontuação foi ${scores[i]}`)
     if(scores[i] === 100){
         console.log('Parabéns você atingiu a pontuação máxima')
         break
     }
}*/

