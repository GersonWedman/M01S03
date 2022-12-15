// // //script aula 03 - escopos (const, let, var)

// var minhaVariavel = 'ConteudoDaVariavel';
// console.log(minhaVariavel);

// function funcaoExemplo() {
//   var varEscopoFunc = 'NoEscopoDaFuncao';
// }

// if (minhaVariavel) {
//   var varEscopoBlock = 'NoEscopoDoBloco';
// }

// //var dentro da função, não irá ser acessível
// //no escopo externo, fora do escopo function.
// // // // -----------------------------
// function definirLargura() {
//   largura = 100;
//   console.log(largura);
// }

// definirLargura();

// console.log(largura);
// // // // -------------------------
// const pessoa = {
//   nome: 'Vitória',
//   idade: 31,
// };

// pessoa.idade = 40;
// console.log(pessoa);

// const vitoria = Object.freeze(pessoa);

// const texto = ['blablabla'];
// texto[0] = 'batata';
// console.log(texto);
// texto[1] = 'couve';
// console.log(texto);

// const numero = [45];
// numero[0] = 33;
// // // -------------------

// // const digitado = prompt('Digite algo: ');
// // console.log(digitado);
// // -----------
// // //exemplo maior número
// // const lista = [4, 5, 2, 77, 8];
// // let max = 0;

// // for (let i = 0; i < lista.length; i++) {
// //   const num = lista[i];
// //   if (num > max) {
// //     max = num;
// //   }
// // }
// // console.log(max);

// // ----------------
// console.log(numA);
// var numA;
// numA = 6;
// numB = 12;
// console.log(numB);
// var numB;
// console.log(numB);
// // ---------------

var texto = 'O rato roeu a roupa do rei de Roma.';
var termo = 'roeu';

// Deve retornar: true
console.log(texto.includes(termo));

function procuraTermo(parametros) {
  const texto = parametros.texto;
  const termo = parametros.termo;

  return texto.includes(termo);
}

const testeA = procuraTermo({
  texto: 'O rato roeu a roupa do rei de Roma.',
  termo: 'rato',
});

const testeB = procuraTermo({
  texto: 'O rato roeu a roupa do rei de Roma.',
  termo: 'batata',
});

console.log(testeA, testeB);
