let tentativas = 3;

const numeroAleatorio = Math.floor(Math.random() *10) + 1;

while(tentativas > 0){
  
  let palpite = prompt("Tentativas restantes: "+ tentativas + "\nDigite seu palpite (entre 1 e 10):");
  
  if(palpite == numeroAleatorio){
    alert("Parabéns! Você adivinhou o número!")
    break;
  }
  else{
    alert("Tente novamente.")
    tentativas--;
  }
}

if (tentativas === 0) {
    console.log("Você perdeu.\nO número era " + numeroAleatorio);
}
