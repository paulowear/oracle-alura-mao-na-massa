

   let el = document.querySelector(".h1");

   el.innerHTML = "hora do desafio";

   function clicar(){
        console.log("O botão foi clicado");
   }

   function alerta(){
        alert(" Eu amo js");
   }

   function cidade(){
        let cidade = prompt("Coloque uma cidade do Brasil");
        alert(`Estive em  ${cidade} e lembrei de você`);
   }

   function soma(numero1, numero2){
       numero1 = prompt("digite um numero");
       numero2 = prompt("digite um segundo numero");
       let resultado = numero1 + numero2;

        alert(`A soma de ${numero1} + ${numero2} é = ${resultado} `);
   }