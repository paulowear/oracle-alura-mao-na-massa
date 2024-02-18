let contador = 0;

while(contador<10){
    contador++;
    alert(contador);
  
}

let contadorDescrecente = 10;

while(contadorDescrecente > 1){
    contadorDescrecente--;
    alert(contadorDescrecente);
  
}

let contagemRegressiva = 10;
while(contagemRegressiva >= 0){
    
    if(contagemRegressiva < 0){
        break;
    }else{
        console.log(contagemRegressiva);
    }
        contagemRegressiva--;
}

let contagemProgressiva = 0;
    while(contagemProgressiva <= 10){
    
        if(contagemProgressiva > 10){
            break;
        }else{
            console.log(contagemProgressiva);
    }
        contagemProgressiva++;
}