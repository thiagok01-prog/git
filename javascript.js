//comentario

/*comentario
grande*/

//três formas de declarar uma váriavel (sem tipo)
//o var e o let se distinguem pelo escopo e declaração
let nome;
var sobreNome;
const e=2.78;
nome = "Romulo";
/*if (nome=="Romulo"){
    sobreNome="Beninca"
    let idade = 20;
    var pet="dog";
    console.log("nome:"+nome+" sobreNome:"+sobreNome+" Idade:"+idade+" pet:"+pet);
}*/
//Estruturas de seleção no js
/*if (idade === 20) {
    console.log("nome:" +nome)
} else {
    console.log("nome:"+"Gustavo");
}*/

/*if (idade=="20") {
    console.log("A")
}
if (idade==="20") {
    console.log("B")
}*/

peso=80
altura=1.77
imc=peso/(altura*altura)
//classificação do IMC
if (imc<18.5) {
    console.log("Abaixo do peso")
} else if (imc>=18.5 && imc<25) {
    console.log ("Peso normal")
} else if (imc>=25 && imc<30) {
    console.log ("Acima do peso")
} else if (imc>=30 && imc<35) {
    console.log ("Obeso grau 1")
 } else if (imc>=35 && imc<40) {
    console.log ("Obeso grau 2")
 } else if (imc>=40) {
    console.log ("Obeso grau 3")
 }

 //switch case estrutura de seleção para imc

  switch (true) {
    case imc<18.5: console.log("A"); break;
    case imc>=18.5: console.log("B"); break;
    case imc>=25: console.log("C"); break;
    case imc>=30: console.log("D"); break;
 }

 //switch case estrutura de seleção

 switch (a) {
    case a**a==4: console.log("A"); break;
    case a==2: console.log("B"); break;
    case 3==3: console.log("C"); break;
    default: console.log("D");
 }

 //Estrutura de repetição while
 let i=0;
 while (i<5) {
    console.log(i);
    i++;
 }