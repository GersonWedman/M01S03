var idade = prompt('Digite a idade:')

switch (idade){
  case (idade>=0 && idade <15):
    alert('Jovem');
    break;
  case(idade>=15 && idade <= 64):
    alert('Adulto')
    break;
  case(idade>=65):
    alert('Idoso') 
    break;
  default:
    alert('Valor inválido')

}