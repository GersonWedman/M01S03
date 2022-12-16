// // // Para treinar os conceitos de Rest.

// // // Crie dois arquivos:

// // // index.html

// // // app.js

// // // No arquivo apps.js, utilizando o operador Rest, crie uma função que receba como parâmetro uma quantidade indefinida de variáveis inteiras (números inteiros).

// // // A função deve retornar a soma de todos os parâmetros (...).
// // // Após executada a função, o resultado deve ser exibido no console.

// // // Exemplo:

// // // const resultado = somaTudo(1, 2, 3, 4);
// // // console.log(resultado);
// // // // resultado deve ser 10

// // // Obs.: Em index.html deve ser incluído o arquivo app.js, para rodar o script e executarmos a função.

//operando sem o rest/spread (...)

//const arr1 = [1, 2, 3, 4, 10, 20];

const somaTudo = (a, ...arr1) => {
  let total = 0;
  for (let i = 0; i < arr1.length; i++) {
    total += arr1[i];
  }
  total = total + a;
  console.log(total);
  console.log(`Resultado da soma é: ${total}`);
};

somaTudo(1, 2, 3, 5, 6);
