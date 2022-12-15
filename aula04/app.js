//REST
//EXERCÍCIO 7 - TRELLO

const somaTodos = (inicial, ...numeros) => {
  return numeros.reduce((acum, n) => {
    return acum + n;
  }, inicial);
};

console.log(somaTodos(2, 4, 5, 7, 8));
