// //script aula 02
// //exemplo de inserção e remoção ao final do array
/*
// const vetorExemplo = [];

// vetorExemplo.push(1);
// vetorExemplo.push('a');
// vetorExemplo.push('ultimo');

// //pegar o último elemento, atribuir a uma variável e remover da pilha
// const ultimo = vetorExemplo.pop()

// console.log(vetorExemplo);
// //----------------------------------------------------------------------------
*/

//FUNÇÕES 

// function f(x, y){
// return x**2 + y;
// }

// //exemplo verificação parametros
// function funcaoExemplo(x,y){
//   if(typeof x !== 'number' || typeof y !== 'number'){
//     return;
//   }
// }

// const resultado = f(2, 3);
// const resultadoB = f(5, 8);

// console.log(resultado)
// console.log(resultadoB)

// // -----------------------------------------------------------------------

// function ola(nome, idade){
// console.log(`Olá, ${nome}!!! Você tem ${idade} anos!!!`);
// }

// ola('Gerson', 32)
// ola('João', 30)

// // ------------------------------------------------------------------------

// função anonima

// (function (){
//   console.log("Sou uma função anônima!");
// })();
// // ------------------------------------------------------------------------------
//Arrow function completa
// const vComArrowFunction = (n) => {
// console.log(`Arrow Function ${n}!`);
// }
// vComArrowFunction();

// //Arrow function com apenas um parametro, sem parênteses

// const vArrowSemParenteses = n => {
//   console.log(`Arrow sem parenteses ${n}!`);
// };

// vArrowSemParenteses('Teste');
// //Com apenas uma expressão, podemos omitir as chaves

// const vArrowSemChaves = n => 
//   console.log(`Arrow sem chaves ${n}!`);
// vArrowSemChaves('Teste2');

// //Comparando funções
// // --------------------------

// //THIS
// const objeto = {
//   nome:"Teste",
//   nomeDaFuncao:function(){
//     console.log(this);
//     console.log(window === this);
//   },
//   nomeDaArrow:() => {
//     console.log(this);
//     console.log(window === this);
//   }
//   };
// objeto.nomeDaFuncao();
// objeto.nomeDaArrow();
// // // ----------------------------------------------
const vetorB = ['A','B','C'];

console.log(vetorB)

// //pegar um item do array por vez
for(let i=0; i<vetorB.length; i++){
  console.log(`i: ${i} v: ${vetorB[i]}`);
}
// // ---
vetorB.forEach(function(valor){
  console.log(`v: ${valor}`);
});

vetorB.forEach(valor => console.log(`v: ${valor}`))

function calculaPontoA(x,y,z) {
return[x*2,y*2,z*2];
}
const calculaPontoB = (x,y,z) => [x*2, y*2, z*2];
console.log(calculaPontoB(1,2,3))
console.log(calculaPontoA(4,2,3))

