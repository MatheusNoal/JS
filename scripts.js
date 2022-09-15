/*let nome = prompt("Qual seu nome?")
alert("Bem vindo, " + nome)*/

/*alert("Iremos somar 2 números")
let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")
let result = Number(Number(numberOne) + Number(numberTwo))
alert("Resultado final: " + result) */

/*let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + multi)
alert("Divisão: " + div)
alert("Resto da divisão: " + restDiv)*/

/*let student = prompt("Qual o nome do(a) aluno?(a)")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else if (average < 3) {
  alert(student + ", infelizmente você foi reprovado." + " Sua média foi de: " + average)
}
else {
  alert(student + ", estude para sua prova de recuperação! Sua média foi de: " + average)
}*/

/*let items = [];

for (let item = 0; item < 10; item++) {
  let itemName = prompt("Digite o item " + (item + 1))
  items[item] = itemName
}

alert(items)*/

/*let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")
const randomNumer = Math.round(Math.random() * 10)

let xAttemps = 1;

while (Number(result) != randomNumer) {
  result = prompt("Erro, tente novamente:")
  xAttemps++
}

alert(`Parabéns! O número que eu pensei foi ${randomNumer}, e você adivinhou o número em ${xAttemps} tentativas.`)*/

/*let option;
let items = []

while (option != 3) {

  option = Number(prompt(`
  Olá usuário. Digite o número da opção desejada
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `))


  if (option == 1) {
    let item = prompt("Digite o nome do item")
    items.push(item)
  }
  else if (option == 2) {

    if (items.length == 0) {
      alert("Não existem itens cadastrados")
    } else {
      alert(items)
    }

  } else {
    alert("Tchau")
  }
}*/

/*let option
let items = []

while (option != 3) {

  option = Number(prompt(`
  Olá usuário. Digite o número da opção desejada
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `))

  switch (option) {
    case 1:
      let item = prompt("Digite o nome do item")
      items.push(item)
      break;
    case 2:
      if (items.length == 0) {
        alert("Não existem itens cadastrados")
      } else {
        alert(items)
      }
      break;
    case 3:
      alert("Tchau")
      break;
    default:
      alert("Opção invalida. Tente novamente")
  }
}*/

/*const patients = [
  {
    name: "Matheus",
    age: 20,
    weight: 70,
    height: 170,
  },
  {
    name: "Aline",
    age: 19,
    wheight: 60,
    height: 160,
  },
  {
    name: "Geromel",
    age: 7,
    wheight: 30,
    height: 100,
  }
]

let patientsNames = []

for (let patient of patients) {
  patientsNames.push(patient.name)
}

alert(patientsNames)*/

/*const patients = [
  {
    name: "Matheus",
    age: 20,
    weight: 70,
    height: 170,
  },
  {
    name: "Aline",
    age: 19,
    wheight: 60,
    height: 160,
  },
  {
    name: "Geromel",
    age: 7,
    wheight: 30,
    height: 100,
  },
]

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}*/

