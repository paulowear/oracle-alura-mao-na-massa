let diaDaSemana = prompt("Qual é o dia da semana");

if(diaDaSemana === "sabado" || diaDaSemana === "domingo"){
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

let numero = prompt("digite um numero para ver se é positivo ou negativo");

if(numero > 0){
    alert("numero positivo");
} else if(numero < 0){
    alert("número negativo");
}

let pontuacao = prompt("digite a pontuação");

if(pontuacao >= 100){
    alert("Parabéns, você venceu!");
} else{
    alert("Tente novamente para ganhar.");
}

let saldoDaConta = 50.00;

alert(`${saldoDaConta}`);

let nome = prompt("Qual é seu nome?");
alert("Bem vindo!" + " " + `${nome}`);
