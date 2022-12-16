// const arr1 = [1, 2, 3, 4];
// const une = [3, 4];

// const resultado = [...une, arr1];

// console.log(resultado);

const r1 = [[6], 3, 15, 100];

const uneDobraRetorna = (r1) => {
  console.log(r1.length);
  for (let i = 1; i < r1.length; i++) {
    r1[i] *= 2;
  }
  return r1;
};

console.log(uneDobraRetorna(r1));
