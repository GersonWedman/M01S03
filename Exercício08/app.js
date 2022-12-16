//necessário inserir os valores desejados para o array em r1.

const r1 = [[2], 10, 4, 8];
var r2 = [];
var r3 = [];

const uneDobraRetorna = (r1) => {
  console.log(r1.length);
  for (let i = 1; i < r1.length; i++) {
    r2[i - 1] = r1[i] * 2;
  }
  r3 = [...r1[0], ...r2];
  return r3;
};

console.log(uneDobraRetorna(r1));
