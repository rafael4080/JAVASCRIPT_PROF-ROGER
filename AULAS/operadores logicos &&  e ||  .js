const passwd = 'plkpikly1'
if(passwd.length >=12 && passwd.includes('1') ){
   console.log('Senha muito forte')
}else if(passwd.length >= 8 || passwd.includes('1') && passwd.length > 5){
   console.log('Senha forte')
}else{
  console.log('A senha tem menos de oito caracteres')
}