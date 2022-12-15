const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática',
};

const desestruturaPessoa = (pessoa) => {
  const { nome, idade, profissao } = pessoa;
  console.log(`"Esta é ${nome}, tem ${idade} anos e é ${profissao}."`);
};

desestruturaPessoa(pessoa);
