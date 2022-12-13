// const ehVerdade = 'sdaf'; 

// if (ehVerdade) {
//    console.log('Verdadeiro');
//    } else {
//     console.log('Falso!');
//    }

//    ehVerdade ? console.log('Verdadeiro!') : console.log('Falso!');


// const numer = 0 ;

// if(numero ===0){
//   console.log('ZERO');
// } else if (numero === 1){
//   console.log('UM')
// } else if (numero === 2){
//   console.log('DOIS')
// }else if (numero === 3){
//   console.log('TRES')
// } else { 
//   console.log('OUTRO');
// }



// switch(numero) {
//   case 0:
//     console.log('ZERO')
//     break;
//   case 1:
//     console.log('UM')
//     break;
//   case 2:
//     console.log('DOIS')
//     break;
//   case 3:
//     console.log('TRES')
//     break;
//   default:
//     console.log('OUTRO'); 


// }

// const numA= null;
// const numB= numA || "falkjdsj";
// console.log(numB)

//coalescencia nula....só vai pegar o segundo valor, caso o primeiro seja nulo ou indefinido. 
// const numA= null;
// const numB= numA ?? "falkjdsj";
// console.log(numB)


// const numD = 1;
// const numE = numD && "BBBBBB";
// console.log(numE);

// const imprimeNaTela = true;

// if (imprimeNaTela) {
//   console.log("imprimiu!";)
// }

// imprimeNaTela && console.log("Imprimiu!")


// ---------
// const vetorA = [1, 2, 3];
// const vetorB = new Array(1, 2, 3); 

// console.log({vetorA, vetorB});
// --------------
// const vetorA = [];

// const ehArray = Array.isArray(vetorA);

// //É possível iniciar com valores prédefinidos
// const vetorB = [2 , 4 , "asd", null, NaN];
// //é possível acrescentar valores após a definição.
// vetorB.push(234);
// vetorB.push("AAAA");
// -------------------
//acessando item no array
// console.log(vetorB[2]);
// //acessando item fora do arrat - undefined (para número negativo, também será undefined)
// console.log(vetorB[12]);

// //como saber tamanho do array
// console.log(vetorB.length)

// //acessando último item do array
// console.log(vetorB[vetorB.length-1])
// console.log(vetorB.at(-1))

// console.log(vetorB.includes(NaN))


// const objetoA= {}; 

// console.log(typeof objetoA)
// ----------------------

// // bom exemplo

// const objetoA = {nome:"Gerson", idade: 32};

// console.log(objetoA)

// console.log(objetoA.nome)

// objetoA.ocupacao = 'Programador';

// objetoA.nome = 'Joao';

// console.log(objetoA.nome)

// console.log(objetoA)

// // ------------

// var vetor = [26, 33, 42];

// console.log(vetor[1]);

// var objeto = { a: 23, b: 35, c: 46};

// console.log(objeto.b);
// console.log(objeto['c'])
// // ----------------
var vetor=[]
vetor.push(42, 15, 34);
console.log(vetor);
console.log(vetor);
console.log(vetor[0]);
console.log(vetor[1]);
console.log(vetor[2]);
vetor.sort ();
console.log(vetor[0]);
console.log(vetor[1]);
console.log(vetor[2]);

