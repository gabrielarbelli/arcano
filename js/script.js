window.addEventListener('load', start);

function start() {
  preventFormSubmit();
}

function preventFormSubmit() {
  function handleSubmit(event) {
    event.preventDefault();
  }
}

function pegarClassificacao(){

  document.querySelector('#braveza').value = 0;
  document.querySelector('#esperteza').value = 0;
  document.querySelector('#estranheza').value = 0;
  document.querySelector('#firmeza').value = 0;
  document.querySelector('#sutileza').value = 0;

  let classificacao = document.querySelector('input[name="classificacao"]:checked').value;

  switch(classificacao){
    case '1': 
      document.querySelector('#braveza').value = document.querySelector('#braveza').value + 0;
      document.querySelector('#esperteza').value = document.querySelector('#esperteza').value + 1;
      document.querySelector('#estranheza').value = document.querySelector('#estranheza').value + 2;
      document.querySelector('#firmeza').value = document.querySelector('#firmeza').value + 1;
      document.querySelector('#sutileza').value = document.querySelector('#sutileza').value - 1;
      break;
    case '2':
      document.querySelector('#braveza').value = document.querySelector('#braveza').value + 1;
      document.querySelector('#esperteza').value = document.querySelector('#esperteza').value + 1;
      document.querySelector('#estranheza').value = document.querySelector('#estranheza').value + 2;
      document.querySelector('#firmeza').value = document.querySelector('#firmeza').value - 1;
      document.querySelector('#sutileza').value = document.querySelector('#sutileza').value + 0;
      break;
    case '3':
      document.querySelector('#braveza').value = document.querySelector('#braveza').value - 1;
      document.querySelector('#esperteza').value = document.querySelector('#esperteza').value + 2;
      document.querySelector('#estranheza').value = document.querySelector('#estranheza').value + 2;
      document.querySelector('#firmeza').value = document.querySelector('#firmeza').value + 0;
      document.querySelector('#sutileza').value = document.querySelector('#sutileza').value - 1;
      break;
    case '4':
      document.querySelector('#braveza').value = document.querySelector('#braveza').value - 1;
      document.querySelector('#esperteza').value = document.querySelector('#esperteza').value + 1;
      document.querySelector('#estranheza').value = document.querySelector('#estranheza').value + 2;
      document.querySelector('#firmeza').value = document.querySelector('#firmeza').value + 0;
      document.querySelector('#sutileza').value = document.querySelector('#sutileza').value + 1;
      break;
    case '5':
      document.querySelector('#braveza').value = document.querySelector('#braveza').value - 0;
      document.querySelector('#esperteza').value = document.querySelector('#esperteza').value + 1;
      document.querySelector('#estranheza').value = document.querySelector('#estranheza').value + 2;
      document.querySelector('#firmeza').value = document.querySelector('#firmeza').value + 0;
      document.querySelector('#sutileza').value = document.querySelector('#sutileza').value + 0;
      break;
  } 
  
}

function refazerPersonagem(){

  document.querySelector('#resultado').style.display = 'none';
  window.scrollTo(0,0);

}

function gerarPersonagem(){

  document.querySelector('#resultNome').textContent = document.querySelector('#nome').value;
  document.querySelector('#resultBraveza').textContent = document.querySelector('#braveza').value;
  document.querySelector('#resultEsperteza').textContent = document.querySelector('#esperteza').value;
  document.querySelector('#resultEstranheza').textContent = document.querySelector('#estranheza').value;
  document.querySelector('#resultFirmeza').textContent = document.querySelector('#firmeza').value;
  document.querySelector('#resultSutileza').textContent = document.querySelector('#sutileza').value;

  document.querySelector('#resultSorte').textContent = document.querySelector('#sorte').value;
  document.querySelector('#resultDano').textContent = document.querySelector('#dano').value;
  
  document.querySelector('#resultSexo').textContent = document.querySelector('input[name="sexo"]:checked').value;
  document.querySelector('#resultOlhos').textContent = document.querySelector('input[name="olhos"]:checked').value;
  document.querySelector('#resultRoupa').textContent = document.querySelector('input[name="roupas"]:checked').value;
  
  document.querySelector('#resultMagia').textContent = document.querySelector('input[name="base"]:checked').value;

  document.querySelector('#resultEfeitos').textContent = '';

  if(document.querySelector('input[id="efeito1"]:checked')){
    if(document.querySelector('#resultEfeitos').textContent !== ''){
      document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + ", ";
    }
    document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + document.querySelector('input[id="efeito1"]:checked').value;
  }
  if(document.querySelector('input[id="efeito2"]:checked')){
    if(document.querySelector('#resultEfeitos').textContent !== ''){
      document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + ", ";
    }
    document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + document.querySelector('input[id="efeito2"]:checked').value;
  }
  if(document.querySelector('input[id="efeito3"]:checked')){
    if(document.querySelector('#resultEfeitos').textContent !== ''){
      document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + ", ";
    }
    document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + document.querySelector('input[id="efeito3"]:checked').value;
  }
  if(document.querySelector('input[id="efeito4"]:checked')){
    if(document.querySelector('#resultEfeitos').textContent !== ''){
      document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + ", ";
    }
    document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + document.querySelector('input[id="efeito4"]:checked').value;
  }
  if(document.querySelector('input[id="efeito5"]:checked')){
    if(document.querySelector('#resultEfeitos').textContent !== ''){
      document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + ", ";
    }
    document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + document.querySelector('input[id="efeito5"]:checked').value;
  }
  if(document.querySelector('input[id="efeito6"]:checked')){
    if(document.querySelector('#resultEfeitos').textContent !== ''){
      document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + ", ";
    }
    document.querySelector('#resultEfeitos').textContent = document.querySelector('#resultEfeitos').textContent + ", " + document.querySelector('input[id="efeito6"]:checked').value;
  }

  document.querySelector('#resultMovimentos').textContent = '';
  
  if(document.querySelector('input[id="movimento1"]:checked')){
    if(document.querySelector('#resultMovimentos').textContent !== ''){
      document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", ";
    }
    document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + document.querySelector('input[id="movimento1"]:checked').value;
  }
  if(document.querySelector('input[id="movimento2"]:checked')){
    if(document.querySelector('#resultMovimentos').textContent !== ''){
      document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", ";
    }
    document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + document.querySelector('input[id="movimento2"]:checked').value;
  }
  if(document.querySelector('input[id="movimento3"]:checked')){
    if(document.querySelector('#resultMovimentos').textContent !== ''){
      document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", ";
    }
    document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + document.querySelector('input[id="movimento3"]:checked').value;
  }
  if(document.querySelector('input[id="movimento4"]:checked')){
    if(document.querySelector('#resultMovimentos').textContent !== ''){
      document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", ";
    }
    document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + document.querySelector('input[id="movimento4"]:checked').value;
  }
  if(document.querySelector('input[id="movimento5"]:checked')){
    if(document.querySelector('#resultMovimentos').textContent !== ''){
      document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", ";
    }
    document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + document.querySelector('input[id="movimento5"]:checked').value;
  }
  if(document.querySelector('input[id="movimento6"]:checked')){
    if(document.querySelector('#resultMovimentos').textContent !== ''){
      document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", ";
    }
    document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", " + document.querySelector('input[id="movimento6"]:checked').value;
  }
  if(document.querySelector('input[id="movimento7"]:checked')){
    if(document.querySelector('#resultMovimentos').textContent !== ''){
      document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", ";
    }
    document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", " + document.querySelector('input[id="movimento7"]:checked').value;
  }
  if(document.querySelector('input[id="movimento8"]:checked')){
    if(document.querySelector('#resultMovimentos').textContent !== ''){
      document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", ";
    }
    document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", " + document.querySelector('input[id="movimento8"]:checked').value;
  }
  if(document.querySelector('input[id="movimento9"]:checked')){
    if(document.querySelector('#resultMovimentos').textContent !== ''){
      document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", ";
    }
    document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", " + document.querySelector('input[id="movimento9"]:checked').value;
  }
  if(document.querySelector('input[id="movimento10"]:checked')){
    if(document.querySelector('#resultMovimentos').textContent !== ''){
      document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", ";
    }
    document.querySelector('#resultMovimentos').textContent = document.querySelector('#resultMovimentos').textContent + ", " + document.querySelector('input[id="movimento10"]:checked').value;
  }
  
  document.querySelector('#resultEquipamento').textContent = document.querySelector('input[name="equipamento"]:checked').value;
  document.querySelector('#resultHistorico').textContent = document.querySelector('input[name="historico"]:checked').value;

  document.querySelector('#resultado').style.display = 'block';

  if(window.innerWidth > 800){
    window.scrollTo(0,0);
  }
}
