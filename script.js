//     Anotações de conceitos Js


//var idade = parseInt(prompt("Qual sua idade?"));

/*---------------Aula Operador Ternário-----------*/
 //
 //   idade >= 18? alert("Pode") : alert("Não pode")


/*--------Aula de Condicionail ------------*/
/*
var n1 = parseFloat(prompt("Primeira Nota: "));
var n2 = parseFloat(prompt("Segunda Nota: "));
var media = (n1 + n2) / 2;

var conceito = " ";

if (media >= 8) {
    conceito = "Otimo"
}
else if (media >= 6.5){
    conceito = "Bom"
}
else {
    conceito = "Ruim"
}*/

/*-----------Aula de Switch Case-------------*/
/*
switch (conceito){
    case "Otimo":
        alert("Nossa você é muito esperto sua media foi:" + media);
        break
    case "Bom":
        alert("Você consegue tem que se esforçar mais nota:" + media);
        break
    case "Ruim":
        alert("Precisa melhorar sua media foi: " + media + " Bons Estudos!");
        break/*
}
/*------------Aula Repetição--------------*/
// For
/*
var numero = 5;

for(var vez = 0; vez <= numero; vez++){
    console.log(vez);
}
console.log("Acabou")*/
//  While
/*
var numero = Math.random() * 100;

  while (numero <= 90) {
      console.log(numero);
      numero = Math.random() * 100;
  }
console.log("Acabou")*/

//Array
//Note a sintaxe da array ela usa []
//var alunos = ["Igor","José","Marcos","Mariana","Suellen"]

 // Aqui passamos por toda array usando .length
 //   for(var contador = 0; contador < alunos.length; contador++){
 //     console.log(alunos[contador])
 //   }

 //Outra maneira de fazer...

//  for(var aluno of alunos){
//      console.log(aluno)
//g  }

/*

Dentro do array os dados devem ser separados por vírgula.
Os dados dentro do array seguem uma ordem (index, índice) que inicia no número zero, este representando a primeira posição e assim sucessivamente
*Length: mostra o comprimento do array 

ARRAY e FOR
FOR + IN= imprime número do index 
For (var i in vetor)
FOR + OF = imprime dado real da posição do index
For (var i of vetor) */