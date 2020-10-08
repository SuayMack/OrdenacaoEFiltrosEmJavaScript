let line = 0;

do {      
      let senha = gets(), // Receiving senha
      upperCase = senha.toLocaleLowerCase(),
      lowerCase = senha.toLocaleUpperCase(), 
      number = senha.match(/(\d)/i),
      specialChar = senha.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''),
      lenght = senha.length >= 6 && senha.length <= 32;
  
      // Validating
  if  (senha.length === 0) {
    
    } else {
      if (senha !== upperCase &&
          senha !== lowerCase && 
          senha === specialChar &&  
          number && lenght) {
            console.log('Senha valida.'); 
      } else { 
            console.log('Senha invalida.');
      }
  }
  	if (senha.length === 0 ) line = 1;
    
} while (line !== 1) 
