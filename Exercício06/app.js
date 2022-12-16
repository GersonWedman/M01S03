const original = 'ana';

const reverse = (s) => {
  return s.split('').reverse().join('');
};

const reverso = reverse(original);

console.log(reverso);

if (original === reverso) {
  console.log('A palavra é um palíndromo');
} else if (original !== reverso) {
  console.log('A palavra NÃO é um palíndromo');
}
