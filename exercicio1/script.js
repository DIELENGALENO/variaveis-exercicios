let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// o tipo undefined foi impresso porque 
// não foi atribuido valor 

nome = prompt("Qual é o seu nome?")
idade = Number (prompt("Qual é a sua idade?"))

console.log("Meu nome é", nome)
console.log("Tenho", idade, "anos")

console.log(typeof nome)
console.log(typeof idade)

//Notei que nome é uma string e idade é um number.

let cidade 
let comida
let viagem

const texto1 = "Em qual cidade você mora?"
const texto2 = "Qual sua comida favorita?"
const texto3 = "Qual o destino da sua próxima viagem?"

cidade = prompt(texto1)
console.log(texto1)
console.log("A cidade que moro é", cidade)

comida = prompt(texto2)
console.log(texto2)
console.log("Minha comida favorita é", comida)

viagem = prompt(texto3)
console.log(texto3)
console.log("Minha próxima viagem será para", viagem)