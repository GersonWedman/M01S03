var lista=[56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
var tamanho = 0;


function funcaoComumA(valor){
  console.log('Desordenado ' + valor);
  //ordenação da lista e impressão
  valor.sort();
  console.log(typeof(valor));
  console.log(valor);
  //det do menor
  var menor = valor[0]
  //det do maior
  var maior=valor[lista.length-1];
  let tamanho=lista.length-1;
  if(menor<maior){
    console.log('Menor é = ' + menor)
    console.log('Maior é = ' + maior)
  }

  else {
    console.log('Não é possível determinar o maior e menor')
  }

  }
  funcaoComumA(lista);



















