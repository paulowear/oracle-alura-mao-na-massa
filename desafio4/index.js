console.log("Boas vindas!");

const nome = "Paulo Henrique";
console.log(`Ola! ${nome}`);

const meuNome = "Paulo Henrique";
alert(`Olá ${meuNome}`);

linguagemDeProgramacao = prompt("Qual é a linguagem de programação que você mais gosta?");
console.log(linguagemDeProgramacao);

let valor1 = 10;
let valor2 = 7;

let resultado = valor1 + valor2;
console.log(`a soma de ${valor1} + ${valor2} é igual ${resultado}`);

let sValor1 = 10;
let sValor2 = 7;

let sResultado = sValor1 - sValor2;
console.log(`a subtração de ${sValor1} - ${sValor2} é igual ${sResultado}`);


let idade = prompt("Insira sua idade");

if(idade>= 18){
    console.log("maior de idade");
}else{
    console.log("menor de idade");
}

let numero = prompt("Digite um numero positivou ou negativo");

if(numero > 0){
    console.log("Positivo");
} else if(numero < 0){
    console.log("negativo");
} else {
    console.log("é igual a zero");
}


let InformeNumero = 0;

while(InformeNumero <= 10){
    console.log(InformeNumero ++);
}

let nota = 10;

if(nota >= 7){
    console.log("aprovado");
} else {
    console.log("reprovado");
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroAleatorio1 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio1);

let numeroAleatorio2 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio2);