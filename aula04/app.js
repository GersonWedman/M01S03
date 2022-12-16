//REST
//AULA 4

// // //------ REST ------------
// console.log('Aula 4');

// function somaTudo(a, b, c, ...vetor) {
//   console.log({ a, b, vetor });
//   let total = 0;

//   for (let i = 0; i < vetor.length; i++) {
//     total += vetor[i];
//   }
//   return total;
// }

// // const resultado = somaTudo(3, 6, 9, 11, 1, 2, 3);

// // console.log(resultado);

// // // //-------------

// const vetorA = [1, 2, 3, 4];

// const vetorB = []

// function multiplicaTudo(a, b, c, d, e, f) {
//   console.log({ a, b, c, d, e, f });
// }

// multiplicaTudo(55, ...vetorA, 999);

// const vetorC = [...vetorB, ...vetorA];

// const objA = { a: 1, b: 2, c: 3 };
// const objB = { b: 44, ...objA, c: 55, d: 66 };

// const [a, b, c] = [1, 2, 3, 4, 5, 6];

// console.log({ a, b, c });
// // // -------------------

const vetorD = ['Romeu', 30, 'Programador', 'Mentor'];

// const [nome, idade, ...info] = vetorD;

// console.log({ nome, idade, info });

//console.log(nome, idade, info);
// // // -----------
//codigo abaixo é muito comum ... estudar o funcionamento

// const objOriginal = {
//   nome: 'Romeu',
//   idade: 30,
//   ocupacoes: ['Programador', 'Mentor'],
// };

// const nome = prompt('Escreva um novo nome: ');
// const objNovo = {
//   ...objOriginal,
//   nome,
// };

// console.log(objNovo);
// // ------------

// function coordenadas(vCoord) {
//   console.log(vCoord);
// }

// coordenadas(1, 2, 3);
// // //---------------

// function coordenadas(a, b, c) {
//   console.log(a, b, c);
// }

// coordenadas(1, 2, 3);
// // // ---------
//exemplo destructuring (array/parametro)
// function coordenadas([x, ...r], extra) {
//   console.log({ x, r, extra });
// }

// const ponto = [1, 2, 3];
// coordenadas(ponto, false);

// // // ------------

const objC = {
  nome: 'Romeu',
  idade: 30,
  ocupacao: ['programador', 'mentor'],
};

// // const nome = objC.nome;
// // const idade = objC.idade;
// // const ocupacao = objC.ocupacao;
// //tres linhas anteriores podem ser resolvidas por

// const { nome, ...info } = objC;
// console.log({ nome, info });

// // // -----------------

function exibePessoa(props) {
  const { nome, idade, ocupacao } = props;

  console.log(nome, idade, ocupacao);
}
exibePessoa(objC);

const letras = ['A', 'B', 'C'];
const r = letras.forEach(L) => {

  console.log(L);

};

  console.log(r, letras);
