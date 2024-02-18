function imc(peso, altura){
    
    let imc = parseFloat(peso / (altura * altura)).toFixed(2);
    if(imc < 18.5){
        console.log("magro");
    } else if(imc >= 18.5 && imc <= 24.9){
        console.log("normal");
    } else if(imc >= 25.0 && imc <= 29.9){
        console.log("sobrepeso");
    } else if(imc >= 30.0 && imc <= 30.9){
        console.log("obesidade");
    } else {
        console.log("obesidade grave");
    }
}

imc(70.00, 1.70);

function fatorial(number){
    if(number < 0){
        return -1;
    } else if(number === 1){
        return 1;
    } else {
        return number * fatorial(number - 1);
        
    }
}

    console.log(fatorial(120));


function converter(dolar){
    let reais = 4.80
    let resultado = dolar * reais;
    console.log(resultado); 
}

converter(2);

function area(altura, largura){
    let perimetro = 2 * (altura * largura);
    console.log(perimetro);
} 

area(1.70, 2.00)

function perimetroCirculo(raio){
    const PI = 3.14;
    let perimetro = 2 * PI * raio;
    console.log(perimetro); 
}

perimetroCirculo(0.4);


function tabuada(number){
    for(i = 0 ; i <= 10; i++){
        let tabuada = number * i;
        console.log(tabuada);
    }
}

tabuada(2);