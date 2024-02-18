function exibir(){
    console.log("Olá mundo");
}

exibir();

function name(nome){
    console.log(`Olá ${nome}`);
}

name("paulo");

function number(numero){
    console.log(numero*=2);
}

number(4);

function media(numero1, numero2, numero3){
  let media = (numero1 + numero2 + numero3) / 3;
  console.log(media);
}

media(10,8,6);

function maior(number1, number2){
    if(number1 > number2){
        return console.log(number1);
    }else {
        return console.log(number2);
    }
}

maior(4,2);

function multiplicacao(number){
    return console.log(number * number);
}

multiplicacao(2);
