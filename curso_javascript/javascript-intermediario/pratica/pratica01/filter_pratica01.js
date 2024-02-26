const idades = []

// Função para adicionar idade à lista
function adicionarIdade() {
  const idadeInput = document.getElementById('idade')
  const idade = parseInt(idadeInput.value)
  
  // condição que verifica se a idade não for NaN vai adicionar a const idade na array idades, senão tiver nenhum valor digitado, ele vai mostrar um alerta
  if (!isNaN(idade)){
    idades.push(idade)
    exibirIdades()
  } else {
    alert("por favor, digite uma idade válida")
  }
  
  // Limpar o campo de entrada
  idadeInput.value = ''

}

// Função para exibir idades na lista
function exibirIdades() {
  const listaIdades = document.getElementById('listaIdades')
  listaIdades.innerHTML = ''

  idades.forEach(idade => {
    const itemLista = document.createElement('li')
    itemLista.textContent = idade
    listaIdades.appendChild(itemLista)
  });
}

// Função para filtrar idades maiores e menores que 18
function filtrarIdades() {
  // se a array idades tiver o seu comprimento maior que 0 vai executar a condição de maior e menor, filtrando os valores, se  
  if (idades.length > 0){
    const maior = idades.filter((valor)=>{
        if(valor > 18){
            return valor
        }
      })
      const menor = idades.filter((valor)=>{
        if(valor < 18){
            return valor
        }
      })
      
      let msg = document.createElement('p')
      msg.innerHTML = `todas as idades: ${idades}, <br> idades maiores de 18 anos: ${maior} <br> Idades menores que 18: ${menor}`
      
      const body = document.body
    
      body.appendChild(msg)
  } else {
    alert('por favor, adicione pelo menos uma idade antes de filtrar')
  }
  
}