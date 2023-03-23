console.log("Olá! Por gentileza preencher todas as informações que forem solicitadas.")

let nome 
let dataDeNascimento
let endereco
let cpf
let escolaridade
let cnh
let quantosFilhos
let cargoAtual
let salario
let comissao

nome = prompt("Nome completo", nome)
console.log("Nome:", nome)

dataDeNascimento = prompt("Data de nascimento:", dataDeNascimento)
console.log("Data de nascimento:", dataDeNascimento)

endereco = prompt("Endereço", endereco)
console.log("Endereço:", endereco)

cpf = Number (prompt("CPF", cpf))
console.log("CPF:", cpf)

escolaridade = prompt("Qual é a sua escolaridade?", escolaridade)
console.log("Escolaridade:", escolaridade)

cnh = prompt("Você possui CNH?", cnh)
console.log("CNH:", cnh)

quantosFilhos = prompt("Você possui filhos? Se sim, quantos?", quantosFilhos)
console.log("Possui filhos:", quantosFilhos)

cargoAtual = prompt("Qual o seu cargo atual?", cargoAtual)
console.log("Qual o seu cargo atual?", cargoAtual)

salario = Number (prompt("Qual sua pretenção salarial?", salario))
console.log("Pretenção Salarial:", salario)

comissao = prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero", comissao)
console.log("Comissão:", comissao)

console.log(typeof nome, typeof dataDeNascimento, typeof endereco, typeof cpf, typeof escolaridade, typeof cnh, typeof quantosFilhos, typeof cargoAtual, typeof salario, typeof comissao)


console.log("Relatório", nome, "nascida em:", dataDeNascimento, ", mora em", endereco, "possui o cpf", cpf, ", seu nível de escolaridade é", escolaridade,",", cnh, "possui CNH,", quantosFilhos, "possui filhos,","seu cargo atual de trabalho é", cargoAtual,"e recebe", comissao, "comissão.")