let result = prompt("Adivinhe o numero que estou pensando? Entre 0 - 10")// atribui variavel para o numero
const randomNumber = Math.round(Math.random()*10)// const gerando numero random

xAttempts = 1// contador para o numero de tentativas, precisa ser ao menos 1

while(Number(result) != randomNumber){// enquanto n acertar o numero  ficará entrando nesse loop
    result= prompt("Errou, tente novamente.")
    xAttempts++
}
if(xAttempts <= 1){
    alert("Parabens, voce acertou o numero em " +  xAttempts + " tentativa")
}else{
    alert("Parabens, voce acertou o numero em " +  xAttempts + " tentativas")
}