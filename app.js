// Aluna: Paloma de Sousa Carvalho
// 
// Questão 1:

let nome;
nome = "Paloma"
alert (nome);

// Questão 2:

let idade = 25.
let altura = 1.75;
alert ("Idade:",idade);
alert ("Altura:",altura);


// Questão 3:

let preco = 50;
let desconto = 0.2;
let procodesconto=preco - (preco*desconto);
alert (procodesconto);


// Questão 4:

let temperatura = 30;
if (temperatura > 25){
    alert ("Está calor!");
} else{
    alert ("Está fresco!"); 
}


// Questão 05:

let idade2 = 20; 
if (idade2>=18){
    alert ("Você é maior de idade");
} else {
    alert ("Você é menor de idade");
}


// Questão 06
//let nota = 8; 
if (nota>=7){
    alert ("Aprovado");
} else if (nota >= 5 && nota < 7){
    alert ("Recuperação");
} else {
    alert ("Reprovado");
}

// Questão 07
let numero1 = 10; 
let numero2 = 20;
if (numero1 ===numero2){
    alert("os numeros são iguais");
} else {
    alert("os numeros são diferentes");
}

//Questão 08
let nome01 = ("Paloma Sousa"); 
let idade01 = 23; 
alert ("Olá, meu nome é"= nome01 +"eu tenho"+ idade01 + "anos");


//Questão 09
for (let i = 1; i <= 10; i++){
    alert (i);
}


//Questão 10
let numero;
do {
    numero = parseInt (prompt("Digite um numero:"));
} while (numero !==5);
alert ("Você digitou 5, fim do loop!");


//Questão 11 
let numero0 = 7; 
for (let i = 1; i <= 10; i++) { 
    alert ("$ {numero0} * ${i}= $ {numero0} * i");
    }


//Questão 12
for (let i = 0; i <= 20; i += 2) {
    alert(i);
}


//Questão 13
function calcularareacirculo (raio) {
    return Math.PI*Math.pow(raio,2);
}
let raio = 5;
alert ("A área do cículo é:",
calcularareacirculo(raio)); 


//Questão 14
//Função para calcular a soma de dois números
function somar (num1, num2) {
    return num1 + num2;
// Retorna a soma de dois números
}
let número01 = 10;
let número02 = 20;
let resultado = somar(número01, número02);
alert("A soma de", número01, "e", número02, "é:",resultado);


//Questão 15
// Função para somar dois números
function somarnumeros (N1, N2) {
    return N1 + N2;
}
let x = 10;
let y = 20;
let z = somarnumeros (x, y);
alert ("O resultado da soma é:", z);



    

